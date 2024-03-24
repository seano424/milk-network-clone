'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
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

  const navbarVariants = {
    open: { translateY: 0, transition: { duration: 0.5 } },
    closed: { translateY: -80, transition: { duration: 0.7 } },
  }

  return (
    <div
      ref={ref}
      className="bg-blue-100 relative h-[300vh]"
    >
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
      </div>

      {/* Navbar #1 */}
      <nav className="absolute z-10 left-1/2 right-0 top-0 p-4 flex justify-end items-center gap-3 xl:justify-between text-xl">
        <div className="hidden gap-3 lg:flex xl:gap-8">
          <Link href="/">Work</Link>
          <Link href="/">Expertise</Link>
          <Link href="/">Community</Link>
          <Link href="/">Discover</Link>
        </div>
        <Link
          className="hidden lg:block underline underline-offset-4"
          href="/"
        >
          Contact
        </Link>
        <button
          onClick={() => alert('hello from the menu button #1')}
          className="lg:hidden"
        >
          Menu
        </button>
      </nav>

      {/* Navbar #2 */}
      <motion.nav
        variants={navbarVariants}
        initial="closed"
        animate={isTop ? 'closed' : 'open'}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed left-0 right-0 top-0 p-4 flex items-center justify-between text-xl bg-white z-10"
      >
        <Link
          href={'/'}
          className="font-black text-2xl lg:text-3xl xl:text-4xl tracking-tighter"
        >
          milk
        </Link>
        <div className="flex justify-end items-center gap-3 xl:justify-between w-1/2 pl-4">
          <div className="hidden gap-3 lg:flex xl:gap-8">
            <Link href="/">Work</Link>
            <Link href="/">Expertise</Link>
            <Link href="/">Community</Link>
            <Link href="/">Discover</Link>
          </div>
          <Link
            className="hidden lg:block underline underline-offset-4"
            href="/"
          >
            Contact
          </Link>
          <button
            onClick={() => alert('hello from the menu button #2')}
            className="lg:hidden"
          >
            Menu
          </button>
        </div>
      </motion.nav>

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
