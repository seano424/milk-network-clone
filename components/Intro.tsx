'use client'

import { useEffect } from 'react'
import AnimatedText from './AnimatedText'
import { loadingAtom, isTopAtom } from '@/atoms'
import { useSetAtom, useAtomValue } from 'jotai'
import { motion, useAnimation } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Intro() {
  const controls = useAnimation()
  const pathname = usePathname()
  const setLoading = useSetAtom(loadingAtom)
  const isTop = useAtomValue(isTopAtom)

  useEffect(() => {
    setLoading(true)
    if (pathname === '/') {
      document.body.style.overflow = 'hidden'
    }
    const timeout = setTimeout(() => {
      controls.start('shrink')
      controls.start('hidden')
      document.body.style.overflow = 'auto'
    }, 2000)

    const timeout2 = setTimeout(() => {
      setLoading(false)
    }, 4000)

    return () => {
      clearTimeout(timeout)
      clearTimeout(timeout2)
    }
  }, [controls, setLoading])

  const textVariants = {
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

  const viewVariants = {
    hidden: {
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

  const isTopVariants = {
    show: { opacity: 100, transition: { duration: 0.3 } },
    hidden: { opacity: 0, transition: { duration: 0.3 } },
  }

  return (
    <motion.div
      initial="show"
      animate={isTop ? 'show' : 'hidden'}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      variants={isTopVariants}
      className="z-0 relative"
    >
      <motion.div
        variants={viewVariants}
        initial="show"
        animate={controls}
        className="w-full bg-white fixed bottom-0 flex items-end left-1 z-50"
      >
        <motion.h1
          animate={controls}
          variants={textVariants}
          initial="grow"
          className="font-black tracking-tight max-h-max relative text-[24rem] xl:text-[32rem] leading-[330px] xl:leading-[400px] left-[11.5px] bottom-[20px]"
        >
          <AnimatedText
            Tag={'div'}
            text="milk"
          />
        </motion.h1>
      </motion.div>
    </motion.div>
  )
}
