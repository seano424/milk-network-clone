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
        className="border-8"
      >
        {filteredItems.map((item) => (
          <div className="">{item.title}</div>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
