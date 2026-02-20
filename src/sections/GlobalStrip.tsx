import React, { useState, useEffect, useRef } from 'react'
import Container from '../components/Container'
import { Reveal, Stagger, Item } from '../components/Effects'

const logos = [
  { src: 'src/assets/logo1.png' },
  { src: 'src/assets/logo2.png' },
  { src: 'src/assets/logo3.png' },
  { src: 'src/assets/logo4.png' },
  { src: 'src/assets/logo5.png' },
  { src: 'src/assets/logo6.png' },
  { src: 'src/assets/logo7.png' },
  { src: 'src/assets/logo8.png' },
  { src: 'src/assets/logo9.jpg' },
  { src: 'src/assets/logo10.jpg' },
  { src: 'src/assets/logo11.jpg' },
  { src: 'src/assets/logo12.jpg' },
]

export default function GlobalStrip() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [duplicatedLogos, setDuplicatedLogos] = useState([...logos, ...logos])

  useEffect(() => {
    setDuplicatedLogos([...logos, ...logos])
  }, [])

  return (
    <>
      <style>{`
        @keyframes loop-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-66.666%); }
        }
      `}</style>
      
      <section className="seo7-divider bg-black">
        <Container className="py-10">
          <div className="text-center">
            <Reveal>
              <div className="font-display text-[18px] text-white">Over $100M in revenue generated for past partners.</div>
              <p className="mt-3 text-[15px] leading-7 text-white/70">
                We have partnered with companies operating across Africa, the European Union, the United Kingdom, the United
                States, and Asia.
              </p>
            </Reveal>

            <div className="mt-8 overflow-hidden">
              <div 
                className="relative py-6"
                style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, black 40px, black calc(100% - 40px), transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40px, black calc(100% - 40px), transparent 100%)'
                }}
              >
                <div 
                  className="flex animate-loop-scroll whitespace-nowrap"
                  style={{
                    animation: 'loop-scroll 60s linear infinite',
                    width: '300%' // Triple the width to accommodate three repetitions
                  }}
                >
                  {[...Array(3)].map((_, repeatIndex) => (
                    <div key={repeatIndex} className="flex">
                      {logos.map((logo, index) => (
                        <div 
                          key={`${repeatIndex}-${index}`} 
                          className="mx-6 flex items-center justify-center flex-shrink-0"
                        >
                          <img 
                            src={logo.src} 
                            className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                            alt={`Partner logo ${index + 1}`}
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}