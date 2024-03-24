'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

import { useAtom } from 'jotai'
import { modalAtom } from '../atoms'
import MobileMenu from './MobileMenu'
import AnimatedLink from './AnimatedLink'
import pages from '@/utilities/pages'
import { navbarVariants } from '@/utilities/headerVariants'

export default function Header() {
  const [isTop, setIsTop] = useState(true)
  const { scrollY } = useScroll()
  const [isModalOpen, setModal] = useAtom(modalAtom)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 0) {
      setIsTop(false)
    } else {
      setIsTop(true)
    }
  })

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isModalOpen])

  return (
    <>
      {/* Navbar #1 */}
      <nav className="absolute z-10 left-1/2 right-0 top-0 p-4 flex justify-end items-center gap-3 xl:justify-between text-xl ">
        <div className="hidden gap-3 lg:flex xl:gap-8">
          {pages.slice(0, 4).map(({ href, title }) => (
            <AnimatedLink
              key={title}
              href={href}
              title={title}
            />
          ))}
        </div>
        <AnimatedLink
          href="/"
          title="Contact"
          invert
          className="hidden lg:block underline underline-offset-4"
        />

        <button
          onClick={() => setModal(true)}
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
            onClick={() => setModal(true)}
            className="lg:hidden"
          >
            Menu
          </button>
        </div>
      </motion.nav>

      <MobileMenu />
    </>
  )
}
