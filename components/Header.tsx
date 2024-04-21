'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useAtom, useAtomValue } from 'jotai'
import { modalAtom, loadingAtom } from '../atoms'
import { companyLinks } from '@/utilities/links'
import { useInView } from 'react-intersection-observer'
import { navbarVariants, menuInViewAnimation } from '@/utilities/variants'
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useAnimation,
} from 'framer-motion'

import Logo from './Logo'
import MobileMenu from './MobileMenu'
import AnimatedLink from './AnimatedLink'

export default function Header() {
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const [isTop, setIsTop] = useState(true)
  const loading = useAtomValue(loadingAtom)
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

  const controls = useAnimation()

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
    if (!inView) {
      controls.start('hidden')
    }
  }, [controls, inView, pathname])

  return (
    <>
      {(!loading || pathname !== '/') && (
        <header>
          {/* Navbar #1 */}
          <nav
            ref={ref}
            className="absolute z-10 grid grid-cols-2 left-0 right-0 top-0 px-4 py-2 text-xl "
          >
            <div>
              {pathname === '/' && (
                <span className="text-4xl opacity-0">logo</span>
              )}
              <Link
                href={'/'}
                className={clsx(
                  'font-bold text-4xl tracking-tight',
                  pathname === '/' && 'hidden'
                )}
              >
                milk
              </Link>
            </div>
            <div className="flex justify-end items-center gap-3 xl:justify-between pl-4">
              <div className="hidden gap-3 lg:flex xl:gap-8">
                {companyLinks.slice(0, 4).map(({ href, title }) => (
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
                className="hidden lg:block border-b-2 border-black w-max"
              />

              <motion.button
                variants={menuInViewAnimation}
                initial="hidden"
                animate={controls}
                onClick={() => setModal(true)}
                className="lg:hidden"
              >
                Menu
              </motion.button>
            </div>
          </nav>

          {/* Navbar #2 (enter on scroll) */}
          <motion.nav
            variants={navbarVariants}
            initial="closed"
            animate={isTop ? 'closed' : 'open'}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={clsx(
              'fixed left-0 right-0 top-0 px-4 py-2 flex items-center justify-between text-xl bg-white dark:bg-black z-30',
              // pathname !== '/' && 'hidden'
            )}
          >
            <Logo />
            <div className="flex justify-end items-center gap-3 xl:justify-between w-1/2 pl-4">
              <div className="hidden gap-3 lg:flex xl:gap-8">
                <Link href="/">Work</Link>
                <Link href="/">Expertise</Link>
                <Link href="/">Community</Link>
                <Link href="/">Discover</Link>
              </div>
              <AnimatedLink
                href="/"
                title="Contact"
                invert
                className="hidden lg:block border-b-2 border-black w-max"
              />
              <button
                onClick={() => setModal(true)}
                className="lg:hidden"
              >
                Menu
              </button>
            </div>
          </motion.nav>

          <MobileMenu />
        </header>
      )}
    </>
  )
}
