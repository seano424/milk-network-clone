'use client'

import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import { filterAtom } from '@/atoms'
import { useAtomValue } from 'jotai'
import { itemsToShowAtom } from '@/atoms'
import { News } from '@/utilities/filters'
import { newsItems } from '@/utilities/content'
import { AnimatePresence, motion } from 'framer-motion'
import { stringToSlug } from '@/utilities/helpers'
import AnimatedLink from './AnimatedLink'

export default function NewsImageCtaGrid() {
  const filterState = useAtomValue(filterAtom)
  const itemsToShow = useAtomValue(itemsToShowAtom)

  const filteredItems = newsItems.filter((item) => {
    if (filterState.filter === '') return item
    return item.categories.includes(filterState.filter as News)
  })

  const sortItemsByDate = filteredItems.sort((a, b) => b.year - a.year)

  return (
    <AnimatePresence>
      <div className="flex flex-col md:grid grid-cols-2 xl:grid-cols-4 gap-4 gap-y-10">
        {sortItemsByDate.slice(0, itemsToShow).map((item, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 1.5, ease: 'easeInOut' },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 1.5, ease: 'easeInOut' },
            }}
            key={index}
          >
            <Link
              href={'/discover/' + stringToSlug(item.title)}
              className="flex flex-col gap-4 relative group"
            >
              <div className="w-full h-auto rounded-xl overflow-hidden">
                <Image
                  alt={item.title}
                  src={item.images[0]}
                  width={200}
                  height={200}
                  className={clsx(
                    'group-hover:scale-110',
                    'w-full h-auto object-cover rounded-xl',
                    'transition-transform duration-700 ease-in-out'
                  )}
                />
              </div>

              <div className="absolute inset-0 p-4">
                <div className="bg-white p-3 rounded-xl w-max">{item.date}</div>
              </div>

              <AnimatedLink title={item.title} />
            </Link>
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  )
}
