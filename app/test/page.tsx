'use client'

import AnimatedText from '@/components/AnimatedText'
import { useInView } from 'react-intersection-observer'

export default function TestPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })
  return (
    <div
      ref={ref}
      className="p-4 pt-20 min-h-screen"
    >
      <AnimatedText
        Tag={'h2'}
        text="Hello World"
      />

      {inView && <p>in view</p>}
    </div>
  )
}
