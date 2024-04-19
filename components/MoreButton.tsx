'use client'

import clsx from 'clsx'
import { useAtom } from 'jotai'
import { itemsToShowAtom } from '@/atoms'
import { AnimatePresence, motion } from 'framer-motion'

import Spin from './Spin'

interface MoreButtonProps {
  items: any[]
}

export default function MoreButton(props: MoreButtonProps) {
  const { items } = props
  const [itemsToShow, setItemsToShow] = useAtom(itemsToShowAtom)

  const handleShowMoreItems = () => {
    setItemsToShow((prev) => prev + 4)
  }

  return (
    <AnimatePresence initial>
      {itemsToShow < items.length && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleShowMoreItems}
          className="text-primary font-bold text-lg group"
        >
          <Spin />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
