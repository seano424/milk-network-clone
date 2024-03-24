'use client'

import { useRef } from 'react'
import { ReactTyped } from 'react-typed'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref })
  // const scale = useMotionValue(1)
  const inputRange = [0, 1]
  const outputRange = [0.8, 1]
  const scale = useTransform(scrollYProgress, inputRange, outputRange)
  const clipPath = useTransform(scrollYProgress, inputRange, [
    'inset(35% round 1rem)',
    'inset(0% round 0rem)',
  ])

  return (
    <div
      ref={ref}
      className="bg-blue-100 relative h-[300vh]"
    >
      <div className="h-screen sticky top-0 pl-4 pt-6 lg:pb-16 lg:px-16 z-10">
        <h1 className="text-6xl lg:text-9xl leading-[.4] tracking-[-0.3rem] flex flex-col">
          We Grow{' '}
          <span className="flex gap-1">
            <span className="animate-blink">_</span>
            <ReactTyped
              strings={['Talent', 'Knowledge', 'People', 'Community', 'Ideas']}
              typeSpeed={70}
              backSpeed={50}
              attr="placeholder"
              loop
            >
              <input
                className="text-black bg-white/0 placeholder:text-black "
                type="text"
              />
            </ReactTyped>
          </span>
        </h1>
      </div>

      <div className="absolute left-0 top-0 w-full h-full z-50">
        <div className="h-screen flex items-center justify-center sticky top-0">
          <motion.div
            style={{ scale, clipPath }}
            className="bg-black rounded relative w-full h-full aspect-video min-h-[25rem]"
          >
            <video
              className="w-full h-full entered loaded"
              autoPlay
              muted
              loop
              playsInline
              src="https://strapi-cms-3mz0.onrender.com/uploads/240123_Milk_Video_2024_Low_V2_8abec16071.mp4"
            ></video>
            <div className="absolute inset-0 flex gap-2 items-center justify-center text-6xl text-white">
              <span className="rounded-full bg-white h-10 w-10"></span>
              Play
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
