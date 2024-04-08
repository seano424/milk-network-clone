'use client'

import Link from 'next/link'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { modalAtom } from '../atoms'
import { motion } from 'framer-motion'
import AnimatedLink from './AnimatedLink'
import { usePathname } from 'next/navigation'
import { offices, companyLinks } from '@/utilities/links'
import {
  mobileMenuContentVariants,
  mobileMenuLeftToRightVariants,
  mobileMenuVariants,
} from '@/utilities/variants'
import Logo from './Logo'

export default function MobileMenu() {
  const [isModalOpen, setModal] = useAtom(modalAtom)
  const pathname = usePathname()

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isModalOpen])

  useEffect(() => {
    setModal(false)
  }, [pathname])

  return (
    <motion.nav
      variants={mobileMenuVariants}
      initial="closed"
      animate={isModalOpen ? 'open' : 'closed'}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed lg:hidden bg-white dark:bg-black inset-0 z-40 flex flex-col overflow-hidden"
    >
      <ul className="px-4 py-2 flex items-center justify-between text-xl">
        <Logo />
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
        {companyLinks.map(({ href, title }) => (
          <motion.li
            variants={mobileMenuContentVariants}
            key={title}
          >
            <AnimatedLink
              href={href}
              title={title}
              className="text-4xl font-medium"
            />
          </motion.li>
        ))}

        <motion.li
          variants={mobileMenuContentVariants}
          className="pt-40 pb-8 text-sm"
        >
          <p>Offices</p>
        </motion.li>

        {offices.map(({ href, title }) => (
          <motion.li
            key={title}
            variants={mobileMenuContentVariants}
            className="text-2xl"
          >
            <AnimatedLink
              href={href}
              title={title}
            />
          </motion.li>
        ))}
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
