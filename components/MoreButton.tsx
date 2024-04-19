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
          className={clsx(
            'group rounded-full h-28 w-28 flex items-center justify-center mx-auto mt-10 relative'
          )}
        >
          <div
            className={clsx(
              'absolute rounded-full inset-0',
              'bg-gray-200/95 dark:bg-gray-950',
              'transition-all duration-700 ease-in-out',
              'group-hover:scale-75'
            )}
          />
          <Spin size="medium" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
