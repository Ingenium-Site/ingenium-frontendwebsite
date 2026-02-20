import React from 'react'
import { cn } from './utils'

export default function Container({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mx-auto w-full max-w-6xl px-5', className)} {...props} />
}
