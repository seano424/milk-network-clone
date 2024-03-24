'use client'

import Link from 'next/link'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { modalAtom } from '../atoms'
import { motion } from 'framer-motion'

const pages = [
  { title: 'Work', href: '/' },
  { title: 'Expertise', href: '/' },
  { title: 'Community', href: '/' },
  { title: 'Discover', href: '/' },
  { title: 'Contact', href: '/' },
]

const mobileMenuVariants = {
  open: {
    maxHeight: '100%',
    transition: { duration: 0.8, staggerChildren: 0.1 },
  },
  closed: {
    maxHeight: 0,
    transition: { duration: 0.3 },
  },
}

const mobileMenuContentVariants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}

const mobileMenuLeftToRightVariants = {
  open: { width: '100%', transition: { duration: 0.7, delay: 0.1 } },
  closed: { width: 0, transition: { duration: 0.7 } },
}

export default function MobileMenu() {
  const [isModalOpen, setModal] = useAtom(modalAtom)

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isModalOpen])

  return (
    <motion.nav
      variants={mobileMenuVariants}
      initial="closed"
      animate={isModalOpen ? 'open' : 'closed'}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed bg-white inset-0 z-50 flex flex-col overflow-hidden"
    >
      <ul className="px-4 pt-4 flex items-center justify-between text-xl">
        <li className="font-black text-2xl lg:text-3xl xl:text-4xl tracking-tighter">
          <Link href={'/'}>milk</Link>
        </li>
        <button
          onClick={() => setModal(false)}
          className="lg:hidden"
        >
          Menu
        </button>
      </ul>
      {/* divider line */}
      <motion.div
        variants={mobileMenuLeftToRightVariants}
        className="h-[1px] bg-gray-300"
      />
      <ul className="px-4 pt-12 flex flex-col gap-2">
        {pages.map(({ href, title }) => (
          <motion.li
            variants={mobileMenuContentVariants}
            key={title}
          >
            <Link
              className="text-4xl font-medium relative group"
              href={href}
            >
              {title}
              <span className="absolute left-0 bottom-0 bg-gray-500 h-[2px] group-hover:w-full w-0 transition-all duration-500 ease-in-out"></span>
            </Link>
          </motion.li>
        ))}

        <motion.li
          variants={mobileMenuContentVariants}
          className="pt-40 text-sm"
        >
          <p>Offices</p>
        </motion.li>
        <motion.li
          variants={mobileMenuContentVariants}
          className="pt-8 text-2xl"
        >
          <Link
            href="/"
            className="relative group"
          >
            Jeddah{' '}
            <span className="absolute left-0 bottom-0 bg-gray-500 h-[2px] group-hover:w-full w-0 transition-all duration-500 ease-in-out"></span>
          </Link>
        </motion.li>
        <motion.li
          variants={mobileMenuContentVariants}
          className="text-2xl"
        >
          <Link
            href="/"
            className="relative group"
          >
            Riyadh
            <span className="absolute left-0 bottom-0 bg-gray-500 h-[2px] group-hover:w-full w-0 transition-all duration-500 ease-in-out"></span>
          </Link>
        </motion.li>
        <motion.li
          variants={mobileMenuContentVariants}
          className="text-2xl"
        >
          <Link
            href={'/'}
            className="relative group"
          >
            Cairo{' '}
            <span className="absolute left-0 bottom-0 bg-gray-500 h-[2px] group-hover:w-full w-0 transition-all duration-500 ease-in-out"></span>
          </Link>
        </motion.li>
      </ul>

      {/* footer */}
      <motion.div
        variants={mobileMenuContentVariants}
        className="p-4 bottom-0 absolute text-xs"
      >
        © 2024 Milk Network. All right reserved
      </motion.div>
    </motion.nav>
  )
}
