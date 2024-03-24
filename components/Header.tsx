'use client'

import Link from 'next/link'
import { useState } from 'react'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

const pages = [
  { title: 'Work', href: '/' },
  { title: 'Expertise', href: '/' },
  { title: 'Community', href: '/' },
  { title: 'Discover', href: '/' },
]

export default function Header() {
  const [isTop, setIsTop] = useState(true)
  const { scrollY } = useScroll()

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
    <>
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

      {/* Navbar #2 (enter on scroll) */}
      <motion.nav
        variants={navbarVariants}
        initial="closed"
        animate={isTop ? 'closed' : 'open'}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed left-0 right-0 top-0 p-4 flex items-center justify-between text-xl bg-white z-40"
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

      {/* Mobile Menu */}
      <nav className="fixed bg-white inset-0 z-50 flex flex-col">
        <div className="flex items-center justify-between text-xl border-b border-black p-4">
          <Link
            href={'/'}
            className="font-black text-2xl lg:text-3xl xl:text-4xl tracking-tighter"
          >
            milk
          </Link>
          <button
            onClick={() => alert('hello from the menu button #2')}
            className="lg:hidden"
          >
            Menu
          </button>
        </div>
        <div className="flex flex-col gap-4 p-4">
          {pages.map(({ href, title }) => (
            <Link
              key={title}
              href={href}
            >
              {title}
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}
