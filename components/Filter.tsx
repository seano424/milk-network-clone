'use client'

import clsx from 'clsx'
import { useAtom } from 'jotai'
import { filterAtom } from '@/atoms'
import { motion, AnimatePresence } from 'framer-motion'

interface FilterProps {
  filters: string[]
  type: 'work' | 'community'
}

export const FilterButton = ({
  type,
  f,
}: {
  type: 'work' | 'community'
  f: string
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
        filterState.filter === f && 'border-b-2 border-black'
      )}
    >
      <span className="relative group">
        {f.length ? f : 'All Works'}
        <span
          className={clsx(
            'absolute left-0  filter backdrop-contrast-200 group-hover:w-full w-0 transition-all duration-500 ease-in-out z-10',
            filterState.filter === f
              ? 'bg-gray-100 h-[5px] -bottom-[5px]'
              : 'bg-black h-[2px] -bottom-[4px]'
          )}
        ></span>
      </span>
    </motion.button>
  )
}

export default function Filter(props: FilterProps) {
  const { filters, type } = props
  const [filterState, setFilterState] = useAtom(filterAtom)

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

  return (
    <div className="relative w-full xl:w-1/2">
      <button
        onClick={() =>
          setFilterState({
            ...filterState,
            isOpen: !filterState.isOpen,
          })
        }
        className="flex justify-between items-center w-full group text-xl bg-gray-100 rounded-lg p-3 z-20 relative"
      >
        {/* Three lines on top of each other */}
        <div className="flex items-center">
          <span className="pr-3 flex flex-col gap-1">
            {/* Line 1 */}
            <span className="block w-5 h-[1.5px] bg-black relative">
              {/* dot somewhere on the line */}
              <span
                className={clsx(
                  'block w-[4px] h-[4px] bg-black absolute top-1/2 transform -translate-y-1/2 rounded-full translate-x-[10px]',
                  'group-hover:translate-x-1',
                  'transition-all duration-500 ease-in-out'
                )}
              ></span>
            </span>

            {/* Line 2 */}
            <span className="block w-5 h-[1.5px] bg-black relative">
              {/* dot somewhere on the line */}
              <span
                className={clsx(
                  'block w-[4px] h-[4px] bg-black absolute top-1/2 transform -translate-y-1/2 rounded-full translate-x-1',
                  'group-hover:translate-x-[10px]',
                  'transition-all duration-500 ease-in-out'
                )}
              ></span>
            </span>

            {/* Line 3 */}
            <span className="block w-5 h-[1.5px] bg-black relative">
              {/* dot somewhere on the line */}
              <span
                className={clsx(
                  'block w-[4px] h-[4px] bg-black absolute top-1/2 transform -translate-y-1/2 rounded-full translate-x-3',
                  'group-hover:translate-x-1',
                  'transition-all duration-500 ease-in-out'
                )}
              ></span>
            </span>
          </span>
          {filterState.filter || 'All Works'}
        </div>

        {/* Plus/Minus SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={clsx(
            'w-6 h-6',
            'transform transition-all duration-700 ease-in-out',
            !filterState.isOpen && 'group-hover:rotate-180',
            filterState.isOpen && 'rotate-180'
          )}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={filterState.isOpen ? 'M5 12h14' : 'M12 4.5v15m7.5-7.5h-15'}
          />
        </svg>
      </button>

      <AnimatePresence
        mode="sync"
        initial={false}
      >
        {filterState.isOpen && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="absolute top-0 left-0 w-full bg-gray-100 rounded-lg z-10 text-xl"
          >
            <div className="grid grid-cols-3 gap-3 pt-20 p-3">
              <FilterButton
                f=""
                type={type}
              />
              {filters.map((f) => (
                <FilterButton
                  key={f}
                  f={f}
                  type={type}
                />
              ))}
            </div>

            <button
              className="mt-10 text-gray-400 p-3"
              onClick={() => {
                setFilterState({ type, filter: '', isOpen: false })
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
