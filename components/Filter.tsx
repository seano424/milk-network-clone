'use client'

import clsx from 'clsx'
import { useSetAtom } from 'jotai'
import { useState } from 'react'
import { filterAtom } from '@/atoms'
import { motion, AnimatePresence } from 'framer-motion'

interface FilterProps {
  filters: string[]
  type: 'work' | 'community'
}

export default function Filter(props: FilterProps) {
  const { filters, type } = props
  const setFilterState = useSetAtom(filterAtom)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [filter, setFilter] = useState<string>(filters[0])
  const container = {
    hidden: { opacity: 0, height: 0 },
    show: {
      opacity: 1,
      height: 'auto',
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
        height: { duration: 0.4 },
        opacity: { duration: 0.25, delay: 0.15 },
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }
  return (
    <div className="relative w-10/12 xl:w-1/2">
      <button
        onClick={() => setIsFilterOpen((prev) => !prev)}
        className="flex justify-between items-center w-full group text-2xl bg-gray-200 rounded-lg p-3 z-20 relative"
      >
        <div className="flex items-center">
          <span className="pr-3 flex flex-col gap-1">
            {/* three lines on top of each other */}

            {/* Line 1 */}
            <span className="block w-6 h-[2px] bg-black relative">
              {/* dot somewhere on the line */}
              <span
                className={clsx(
                  'block w-[5px] h-[5px] bg-black absolute top-1/2 transform -translate-y-1/2 rounded-full translate-x-[10px]',
                  'group-hover:translate-x-1',
                  'transition-all duration-500 ease-in-out'
                )}
              ></span>
            </span>

            {/* Line 2 */}
            <span className="block w-6 h-[2px] bg-black relative">
              {/* dot somewhere on the line */}
              <span
                className={clsx(
                  'block w-[5px] h-[5px] bg-black absolute top-1/2 transform -translate-y-1/2 rounded-full translate-x-1',
                  'group-hover:translate-x-[10px]',
                  'transition-all duration-500 ease-in-out'
                )}
              ></span>
            </span>

            {/* Line 3 */}
            <span className="block w-6 h-[2px] bg-black relative">
              {/* dot somewhere on the line */}
              <span
                className={clsx(
                  'block w-[5px] h-[5px] bg-black absolute top-1/2 transform -translate-y-1/2 rounded-full translate-x-3',
                  'group-hover:translate-x-1',
                  'transition-all duration-500 ease-in-out'
                )}
              ></span>
            </span>
          </span>
          {filter}
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={clsx(
            'w-8 h-8',
            'transform transition-all duration-700 ease-in-out',
            !isFilterOpen && 'group-hover:rotate-180'
          )}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={isFilterOpen ? 'M5 12h14' : 'M12 4.5v15m7.5-7.5h-15'}
          />
        </svg>
      </button>

      <AnimatePresence
        mode="sync"
        initial={false}
      >
        {isFilterOpen && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="absolute top-0 left-0 w-full bg-gray-200 rounded-lg z-10 text-xl"
          >
            <div className="grid grid-cols-3 gap-3 pt-20 p-3">
              {filters.map((f) => (
                <motion.button
                  key={f}
                  variants={item}
                  onClick={() => {
                    setFilter(f)
                    setIsFilterOpen(false)
                    setFilterState({ type, filter: f })
                  }}
                  className={clsx(
                    'text-left w-max',
                    filter === f && 'border-b-2 border-black'
                  )}
                >
                  <span className="relative group">
                    {f}
                    <span
                      className={clsx(
                        'absolute left-0 -bottom-[5px] h-[3px] group-hover:w-full w-0 transition-all duration-500 ease-in-out z-10',
                        filter === f ? 'bg-gray-200' : 'bg-black'
                      )}
                    ></span>
                  </span>
                </motion.button>
              ))}
            </div>

            <button
              className="mt-10 text-gray-400 p-3"
              onClick={() => {
                setFilter('All works')
                setIsFilterOpen(false)
              }}
            >
              Clear
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
