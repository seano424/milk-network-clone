'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  motion,
  useAnimation,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface WhatWeDoBoxProps {
  item: {
    title: string
    href: string
    imgSrc: string
  }
}

export default function WhatWeDoBox(props: WhatWeDoBoxProps) {
  const { item } = props
  const { title, href, imgSrc } = item
  const { scrollY } = useScroll()
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down')
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.9,
  })

  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('show')
    }
    if (!inView && scrollDirection === 'up') {
      controls.start('hidden')
    }
  }, [controls, inView])

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const scrollingDown = latest > (scrollY.getPrevious() ?? 0)
    if (scrollingDown) {
      setScrollDirection('down')
    } else {
      setScrollDirection('up')
    }
  })

  const whatWeDoBoxVariants = {
    hidden: {
      scaleX: 0,
      originX: 0,
      originY: 0,
      transition: {
        duration: 3,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
    show: {
      originX: 0,
      originY: 0,
      scaleX: 1,
      transition: {
        duration: 3,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return (
    <Link
      href={href}
      className="grid grid-cols-2 border-b py-4 border-gray-200"
    >
      <div className="flex flex-col justify-end">{title}</div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={whatWeDoBoxVariants}
        className="w-full h-56 xl:h-64 relative"
      >
        <Image
          fill
          alt={title}
          src={imgSrc}
          className="object-cover rounded-lg"
          sizes="(min-width: 640px) 50vw, 100vw"
        />
      </motion.div>
    </Link>
  )
}
