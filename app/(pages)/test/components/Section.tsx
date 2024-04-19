'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'
import {
  motion,
  useAnimation,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Section() {
  const { scrollY, scrollYProgress } = useScroll()
  // const [scrollPercentage, setScrollPercentage] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down')
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.7,
  })

  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('show')
    }
    if (!inView && scrollDirection === 'up') {
      controls.start('hidden')
    }
  }, [controls, inView, scrollDirection])

  useMotionValueEvent(scrollY, 'change', (latest) => {
    console.log('scroll y progress', scrollYProgress.get())

    const scrollingDown = latest > (scrollY.getPrevious() ?? 0)
    if (scrollingDown) {
      setScrollDirection('down')
    } else {
      setScrollDirection('up')
    }
  })

  const variants = {
    hidden: {
      scaleX: 0,
      originX: 0,
      originY: 0,
      transition: {
        duration: 1.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
    show: {
      scaleX: 1,
      originX: 0,
      originY: 0,
      transition: {
        duration: 1.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      variants={variants}
      animate={controls}
      className={clsx('p-4 border-8 min-h-[60rem] bg-purple-100')}
    >
      hello world
    </motion.section>
  )
}
