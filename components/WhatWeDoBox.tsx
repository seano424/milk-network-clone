'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation, useScroll } from 'framer-motion'

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
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.9,
  })

  const controls = useAnimation()

  useEffect(() => {
    const scrollDirection =
      scrollY.get() > (scrollY.getPrevious() ?? 0) ? 'down' : 'up'

    if (inView) {
      controls.start('show')
    }
    if (!inView && scrollDirection === 'up') {
      controls.start('hidden')
    }
  }, [controls, inView, scrollY])

  const whatWeDoBoxVariants = {
    hidden: {
      scaleX: 0.2,
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
      <h4 className="flex flex-col justify-end text-2xl">{title}</h4>
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
