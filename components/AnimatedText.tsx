'use client'

import clsx from 'clsx'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

interface Props {
  text: string
  Tag: React.ElementType
  className?: string
}

export default function AnimatedText(props: Props) {
  const { text, Tag, className } = props

  const controls = useAnimation()

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      controls.start('show')
    }
    if (!inView) {
      controls.start('hidden')
    }
  }, [controls, inView])

  const characterAnimation = {
    hidden: { translateY: 400 },
    show: {
      translateY: 0,
      transition: {
        duration: 1.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  const wordAnimation = {
    hidden: {},
    show: {},
  }

  return (
    <Tag className={clsx(className, 'overflow-hidden')}>
      {text.split(' ').map((word, index) => {
        return (
          <motion.span
            key={index}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={wordAnimation}
            className="relative inline-block mr-2"
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.12,
            }}
          >
            {word.split('').map((char, index) => {
              return (
                <motion.span
                  key={index}
                  className="inline-block"
                  variants={characterAnimation}
                >
                  {char}
                </motion.span>
              )
            })}
          </motion.span>
        )
      })}
    </Tag>
  )
}
