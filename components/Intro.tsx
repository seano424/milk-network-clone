'use client'

import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import AnimatedText from './AnimatedText'

export default function Intro() {
  const controls = useAnimation()

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    setTimeout(() => {
      controls.start('shrink')
      controls.start('hidden')
      document.body.style.overflow = 'auto'
    }, 2000)
  }, [])

  const textAnimation = {
    grow: {
      originX: 0,
      originY: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
    shrink: {
      originX: 0,
      originY: 1,
      scale: 0.125,
      transition: {
        duration: 1.75,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  const viewAnimation = {
    hidden: {
      // opacity: 0,
      // zIndex: -1,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
        delay: 2,
      },
    },
    show: {
      opacity: 1,
    },
  }

  return (
    <motion.div
      variants={viewAnimation}
      initial="show"
      animate={controls}
      className="h-screen w-full bg-white fixed flex items-end left-1 z-50"
    >
      <motion.h1
        animate={controls}
        variants={textAnimation}
        initial="grow"
        className="font-black tracking-tighter h-max relative text-[24rem] leading-[330px] left-[11.5px] bottom-[20px]"
      >
        <AnimatedText
          Tag={'div'}
          text="milk"
        />
      </motion.h1>
    </motion.div>
  )
}
