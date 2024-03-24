'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { ReactTyped } from 'react-typed'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const [isTop, setIsTop] = useState(true)
  const { scrollYProgress, scrollY } = useScroll({ target: ref })
  const inputRange = [0, 1]
  const outputRange = [0.8, 1]
  const scale = useTransform(scrollYProgress, inputRange, outputRange)
  const clipPath = useTransform(scrollYProgress, inputRange, [
    'inset(35% round 1rem)',
    'inset(0% round 0rem)',
  ])

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 0) {
      setIsTop(false)
    } else {
      setIsTop(true)
    }
  })

  const bottomLogoVariants = {
    show: { opacity: 100, transition: { duration: 0.3 } },
    hide: { opacity: 0, transition: { duration: 0.3 } },
  }

  return (
    <div
      ref={ref}
      className="relative h-[300vh]"
    >
      {/* divider line */}
      <div className="absolute w-0.5 h-full bg-gray-100 left-1/2 top-0"></div>

      {/* Hero Header */}
      <div className="h-screen sticky top-0 p-4">
        <h1 className="text-6xl lg:text-9xl tracking-[-0.3rem] lg:font-semibold">
          <div className="-mb-2 lg:-mb-10">We Grow </div>
          <div className="flex gap-1">
            <span className="animate-blink">_</span>
            <ReactTyped
              strings={[
                'Talent',
                'Knowledge',
                'People',
                'Community',
                'Ideas',
                'Businessess',
              ]}
              typeSpeed={70}
              backSpeed={50}
              attr="placeholder"
              loop
            >
              <input
                className="text-black bg-white/0 placeholder:text-black w-full"
                type="text"
              />
            </ReactTyped>
          </div>
        </h1>

        {/* bottom left logo (hides on scroll) */}
        <motion.div
          initial="show"
          animate={isTop ? 'show' : 'hide'}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          variants={bottomLogoVariants}
          className="absolute left-0 bottom-0 p-4 z-10"
        >
          <Link
            href="/"
            className="font-black text-5xl tracking-tighter"
          >
            milk
          </Link>
        </motion.div>

        {/* bottom right paragraph */}
        <div className="absolute right-0 bottom-0 z-10 w-1/2 px-7 pb-16 xl:pb-4">
          <p className="text-2xl leading-7 tracking-tight xl:text-5xl">
            Milk Network
            <span className="font-thin tracking-tighter">&trade;</span> is a
            brand development firm that works in thought and in action.
          </p>
          <p className="hidden xl:block mt-10 underline text-xl underline-offset-4 text-stone-400">
            Scroll down
          </p>
        </div>
      </div>

      {/* Video Box Animation */}
      <div className="absolute left-0 top-0 w-full h-full">
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
