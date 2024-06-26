'use client'

import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import { filterAtom } from '@/atoms'
import { useAtomValue } from 'jotai'
import { itemsToShowAtom } from '@/atoms'
import { Work } from '@/utilities/filters'
import { workItems } from '@/utilities/content'
import { AnimatePresence, motion } from 'framer-motion'

import MoreButton from './MoreButton'
import AnimatedLink from './AnimatedLink'

export default function ImageCtaGrid() {
  const filterState = useAtomValue(filterAtom)
  const itemsToShow = useAtomValue(itemsToShowAtom)

  const filteredItems = workItems.filter((item) => {
    if (filterState.filter === '') return item
    return item.categories.includes(filterState.filter as Work)
  })

  const sortItemsByDate = filteredItems.sort((a, b) => b.year - a.year)

  return (
    <>
      <AnimatePresence>
        <div className="grid grid-cols-4 gap-x-3 gap-y-7 min-h-80">
          {sortItemsByDate.slice(0, itemsToShow).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 1.5, ease: 'easeInOut' },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 1.5, ease: 'easeInOut' },
              }}
              className={clsx(
                item.spansTwoColumns
                  ? 'col-span-2 xl:col-span-1'
                  : 'col-span-2',
                'group'
              )}
            >
              <Link
                href={item.href}
                id="link"
              >
                <div className="flex flex-col gap-4">
                  <div
                    className={clsx(
                      'rounded-lg relative h-80 w-full overflow-hidden',
                      item.spansTwoColumns ? 'xl:h-80' : 'xl:h-[40rem]'
                    )}
                  >
                    <Image
                      fill
                      sizes="50vw"
                      src={
                        item.images[0] ?? 'https://source.unsplash.com/random'
                      }
                      alt={item.title}
                      className="w-full h-48 object-cover object-center mb-5 rounded-lg group-hover:scale-125 transition-transform duration-500 ease-in-out"
                    />
                  </div>
                  <div>
                    <AnimatedLink title={item.title} />
                    <div className="flex gap-1 flex-wrap">
                      {item.categories.map((category) => (
                        <p key={category}>
                          {category}

                          {item.categories.indexOf(category) !==
                            item.categories.length - 1 && ', '}
                        </p>
                      ))}
                    </div>
                    <p>({item.year})</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>

      <MoreButton items={sortItemsByDate} />
    </>
  )
}
