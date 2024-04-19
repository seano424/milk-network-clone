'use client'

import { useAtom } from 'jotai'
import { itemsToShowAtom } from '@/atoms'
import { AnimatePresence, motion } from 'framer-motion'

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
          className="text-primary font-bold text-lg"
        >
          Show more
        </motion.button>
      )}
    </AnimatePresence>
  )
}
