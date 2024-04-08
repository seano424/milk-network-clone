import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import { filterAtom } from '@/atoms'
import { useAtomValue } from 'jotai'
import { Work } from '@/utilities/filters'
import { workItems } from '@/utilities/workItems'
import { AnimatePresence, motion } from 'framer-motion'

export default function ImageCtaList() {
  const filterState = useAtomValue(filterAtom)

  const filteredItems = workItems.filter((item) => {
    if (filterState.filter === '') return item
    return item.categories.includes(filterState.filter as Work)
  })

  const sortItemsByDate = filteredItems.sort((a, b) => b.year - a.year)

  return (
    <AnimatePresence>
      <motion.div
        key="imageCtaList"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1.5, ease: 'easeInOut' },
        }}
        exit={{
          opacity: 0,
          transition: { duration: 1.5, ease: 'easeInOut' },
        }}
      >
        <div className="grid grid-cols-4 text-gray-100">
          <div className={clsx('p-4')}>Project</div>
          <div className="p-4">Services</div>
          <div className="p-4">Year</div>
          <div className={clsx('p-4')}>Client</div>
        </div>

        {sortItemsByDate.map((item, i) => (
          <Link
            href={item.href}
            key={item.title}
          >
            <div className="grid grid-cols-4">
              <div
                className={clsx(
                  'border-y p-4',
                  i === 0 && 'rounded-tl',
                  i === filteredItems.length - 1 && 'rounded-bl'
                )}
              >
                {item.title}
              </div>
              <div className="border-y p-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  height={200}
                  width={200}
                  className="object-cover object-center bg-purple-100"
                />
              </div>
              <div className="border-y p-4">
                {item.categories.map((cat) => (
                  <p
                    className="flex"
                    key={cat}
                  >
                    {cat}
                    {item.categories.indexOf(cat) !==
                      item.categories.length - 1 && ', '}
                  </p>
                ))}
              </div>
              <div
                className={clsx(
                  'border-y p-4',
                  i === 0 && 'rounded-tr',
                  i === filteredItems.length - 1 && 'rounded-br'
                )}
              >
                {item.year}
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
