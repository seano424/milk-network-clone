'use client'

import clsx from 'clsx'
import { useAtom } from 'jotai'
import { filterAtom } from '@/atoms'
import { motion } from 'framer-motion'

const FilterButton = ({
  type,
  f,
  allText,
}: {
  type: 'work' | 'community' | 'news'
  f: string
  allText?: string
}) => {
  const [filterState, setFilterState] = useAtom(filterAtom)

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  return (
    <motion.button
      variants={item}
      onClick={() => {
        setFilterState({ type, filter: f ?? '', isOpen: false })
      }}
      className={clsx(
        'text-left w-max',
        filterState.filter === f && 'border-b-2 border-black dark:border-white'
      )}
    >
      <span className="relative group">
        {f.length ? f : allText}
        <span
          className={clsx(
            'absolute left-0  filter backdrop-contrast-200 group-hover:w-full w-0 transition-all duration-500 ease-in-out z-10',
            f.length
              ? filterState.filter === f
                ? 'bg-gray-100 h-[5px] -bottom-[5px]'
                : 'bg-gray-950 dark:bg-white h-[2px] -bottom-[4px]'
              : 'bg-gray-100 dark:bg-gray-950 h-[5px] -bottom-[5px]'
          )}
        ></span>
      </span>
    </motion.button>
  )
}

export default FilterButton
