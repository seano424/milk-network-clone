'use client'

import { useSetAtom } from 'jotai'
import { isTopAtom } from '@/atoms'
import { useRef, useEffect } from 'react'
import AnimatedText from './AnimatedText'
import { ReactTyped } from 'react-typed'
import { useInView } from 'react-intersection-observer'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useAnimation,
} from 'framer-motion'


export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const setIsTop = useSetAtom(isTopAtom)
  const { scrollYProgress, scrollY } = useScroll({ target: ref })
  const inputRange = [0, 1]
  const outputRange = [0.8, 1]
  const scale = useTransform(scrollYProgress, inputRange, outputRange)
  const clipPath = useTransform(scrollYProgress, inputRange, [
    'inset(35% round 1rem)',
    'inset(0% round 0rem)',
  ])

  const { ref: typedAnimationRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('show')
    }
    if (!inView) {
      controls.start('hidden')
    }
  }, [controls, inView])

  const h1Animation = {
    hidden: {},
    show: {},
  }

  const typedAnimationVariants = {
    hidden: { translateY: 200 },
    show: {
      translateY: 0,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
        delay: 1,
      },
    },
  }

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 0) {
      setIsTop(false)
    } else {
      setIsTop(true)
    }
  })


  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 5,
        staggerChildren: 5,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={containerVariants}
      animate={controls}
      className="relative h-[300vh]"
    >
      {/* divider line */}
      <div className="absolute w-0.5 h-full bg-gray-100 left-1/2 top-0"></div>

      {/* Hero Header */}
      <div className="h-screen sticky top-0 p-4">
        <h1 className="text-6xl lg:text-9xl tracking-[-0.3rem] lg:font-semibold">
          <AnimatedText
            className="-mb-2 lg:-mb-10"
            Tag={'div'}
            text="We Grow"
          />

          <motion.div
            ref={typedAnimationRef}
            variants={h1Animation}
            transition={{
              delayChildren: 0.25,
              staggerChildren: 0.05,
            }}
            className="flex gap-1 overflow-hidden"
          >
            <motion.span
              variants={typedAnimationVariants}
              className="animate-blink inline-block"
            >
              _
            </motion.span>
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
              <motion.input
                variants={typedAnimationVariants}
                className="text-black bg-white/0 placeholder:text-black w-full"
                type="text"
              />
            </ReactTyped>
          </motion.div>
        </h1>


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
    </motion.div>
  )
}
