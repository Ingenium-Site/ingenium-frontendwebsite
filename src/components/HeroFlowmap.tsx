import React from 'react'

declare global {
  interface Window {
    ogl?: any
  }
}

function loadScriptOnce(src: string) {
  const key = `__loaded:${src}`
  if ((window as any)[key]) return Promise.resolve()

  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector(`script[data-src="${src}"]`) as HTMLScriptElement | null
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true })
      existing.addEventListener('error', () => reject(new Error(`Failed to load ${src}`)), { once: true })
      return
    }

    const s = document.createElement('script')
    s.src = src
    s.async = true
    s.dataset.src = src
    s.onload = () => {
      ;(window as any)[key] = true
      resolve()
    }
    s.onerror = () => reject(new Error(`Failed to load ${src}`))
    document.head.appendChild(s)
  })
}

export default function HeroFlowmap({
  image,
  opacity = 0.55,
  className,
}: {
  image: string
  opacity?: number
  className?: string
}) {
  const hostRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    let destroyed = false
    let cleanupFns: Array<() => void> = []

    async function start() {
      const host = hostRef.current
      if (!host) return

      try {
        await loadScriptOnce('/vendor/flowmap-effect.min.js')
      } catch {
        // Silent fallback to static background
        return
      }

      if (destroyed || !host || !window.ogl) return
      const ogl = window.ogl

      // Avoid double-mounting (React strict mode / hot reload)
      host.innerHTML = ''

      const renderer = new ogl.Renderer({ dpr: Math.min(2, window.devicePixelRatio || 1) })
      const gl = renderer.gl
      gl.clearColor(0, 0, 0, 0)
      host.appendChild(gl.canvas)

      const vertex = `
        attribute vec2 uv;
        attribute vec2 position;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 0, 1);
        }
      `

      const fragment = `
        precision highp float;
        precision highp int;
        uniform sampler2D tWater;
        uniform sampler2D tFlow;
        uniform float uTime;
        varying vec2 vUv;
        uniform vec4 res;

        void main() {
          vec3 flow = texture2D(tFlow, vUv).rgb;
          vec2 uv = .5 * gl_FragCoord.xy / res.xy;
          vec2 myUV = (uv - vec2(0.5)) * res.zw + vec2(0.5);
          myUV -= flow.xy * 0.105;
          vec3 tex = texture2D(tWater, myUV).rgb;
          gl_FragColor = vec4(tex, 1.0);
        }
      `

      const flowmap = new ogl.Flowmap(gl, { falloff: 0.6 })
      const geometry = new ogl.Geometry(gl, {
        position: { size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3]) },
        uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) },
      })

      const texture = new ogl.Texture(gl, {
        minFilter: gl.LINEAR,
        magFilter: gl.LINEAR,
      })

      const img = new Image()
      img.crossOrigin = 'Anonymous'
      img.src = image
      await new Promise<void>((resolve) => {
        img.onload = () => resolve()
        img.onerror = () => resolve() // fallback: run anyway
      })
      if (destroyed) return
      texture.image = img

      const program = new ogl.Program(gl, {
        vertex,
        fragment,
        uniforms: {
          uTime: { value: 0 },
          tWater: { value: texture },
          res: { value: new ogl.Vec4() },
          tFlow: flowmap.uniform,
        },
      })

      const mesh = new ogl.Mesh(gl, { geometry, program })

      let aspect = 1
      const mouse = new ogl.Vec2(-1)
      const velocity = new ogl.Vec2()
      const lastMouse = new ogl.Vec2()
      let lastTime: number | undefined

      function resize() {
        const hostW = host.offsetWidth
        const hostH = host.offsetHeight
        if (!hostW || !hostH) return

        // cover image similar to SEO7
        const imgW = img.naturalWidth || 1920
        const imgH = img.naturalHeight || 1080
        const imageAspect = imgH / imgW
        let a1: number
        let a2: number

        if (hostH / hostW < imageAspect) {
          a1 = 1
          a2 = hostH / hostW / imageAspect
        } else {
          a1 = (hostW / hostH) * imageAspect
          a2 = 1
        }

        program.uniforms.res.value.set(hostW, hostH, a1, a2)
        renderer.setSize(hostW, hostH)
        aspect = hostW / hostH
      }

      const onResize = () => resize()
      window.addEventListener('resize', onResize)
      cleanupFns.push(() => window.removeEventListener('resize', onResize))
      resize()

      const isTouchCapable = 'ontouchstart' in window
      const listenEl: HTMLElement = (host.parentElement as HTMLElement) || host
      const updateMouse = (e: any) => {
        if (e.changedTouches && e.changedTouches.length) e = e.changedTouches[0]
        const rect = host.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        mouse.set(x / host.offsetWidth, 1 - y / host.offsetHeight)

        if (!lastTime) {
          lastTime = performance.now()
          lastMouse.set(x, y)
        }

        const deltaX = x - lastMouse.x
        const deltaY = y - lastMouse.y
        lastMouse.set(x, y)

        const time = performance.now()
        const delta = Math.max(14, time - lastTime)
        lastTime = time

        velocity.x = deltaX / delta
        velocity.y = deltaY / delta
        velocity.needsUpdate = true
      }

      if (isTouchCapable) {
        listenEl.addEventListener('touchstart', updateMouse, { capture: true } as any)
        listenEl.addEventListener('touchmove', updateMouse, { passive: false, capture: true } as any)
        cleanupFns.push(() => {
          listenEl.removeEventListener('touchstart', updateMouse as any, { capture: true } as any)
          listenEl.removeEventListener('touchmove', updateMouse as any, { capture: true } as any)
        })
      } else {
        listenEl.addEventListener('mousemove', updateMouse, { capture: true } as any)
        cleanupFns.push(() => listenEl.removeEventListener('mousemove', updateMouse as any, { capture: true } as any))
      }

      let raf = 0
      const loop = (t: number) => {
        raf = requestAnimationFrame(loop)
        if (destroyed) return

        if (!velocity.needsUpdate) {
          mouse.set(-1)
          velocity.set(0)
        }

        velocity.needsUpdate = false

        flowmap.aspect = aspect
        flowmap.mouse.copy(mouse)
        flowmap.velocity.lerp(velocity, velocity.len() ? 0.15 : 0.1)
        flowmap.update()

        program.uniforms.uTime.value = t * 0.01
        renderer.render({ scene: mesh })
      }
      raf = requestAnimationFrame(loop)
      cleanupFns.push(() => cancelAnimationFrame(raf))

      // Cleanup WebGL
      cleanupFns.push(() => {
        try {
          host.innerHTML = ''
          ;(renderer as any).gl?.getExtension('WEBGL_lose_context')?.loseContext?.()
        } catch {
          // ignore
        }
      })
    }

    start()

    return () => {
      destroyed = true
      cleanupFns.forEach((fn) => fn())
      cleanupFns = []
    }
  }, [image])

  return (
    <div
      ref={hostRef}
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    />
  )
}
