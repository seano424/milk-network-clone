'use client'
import HeroText from '@/components/HeroText'
import { AnimatePresence, motion } from 'framer-motion'

export default function DiscoverPage() {
  return (
    <AnimatePresence
      initial={false}
      key="work-page"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 5, ease: 'easeInOut' },
        }}
        exit={{
          opacity: 0,
          transition: { duration: 5, ease: 'easeInOut' },
        }}
        className="mt-20 flex flex-col gap-8"
      >
        <HeroText
          header="The Latest"
          subheader="Discover our thought leadership and expert insights on vision,
          strategy, culture, and brand, and learn how to apply them to your
          business."
        />
      </motion.div>
    </AnimatePresence>
  )
}
