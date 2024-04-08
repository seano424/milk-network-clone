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
import Video from './Video'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const setIsTop = useSetAtom(isTopAtom)
  const { scrollYProgress, scrollY } = useScroll({ target: ref })

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
      <div className="absolute w-0.5 h-full bg-gray-100 dark:bg-black left-1/2 top-0"></div>

      {/* Hero Header */}
      <div className="h-screen sticky top-0">
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
                className="text-black dark:text-white bg-white/0 placeholder:text-black dark:placeholder:text-white w-full"
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

      {/* Video */}
      <Video scrollYProgress={scrollYProgress} />
    </motion.div>
  )
}
