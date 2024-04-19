'use client'
import { AnimatePresence, motion } from 'framer-motion'
import GridList from '@/components/GridList'
import CtaLarge from '@/components/CtaLarge'
import HeroText from '@/components/HeroText'

export default function WorkPage() {
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
        <HeroText header="Work" />
        <div className="grid gap-40 p-4">
          <GridList />
          <CtaLarge
            image="https://strapi-cms-3mz0.onrender.com/uploads/Jeddah_Office_1_70052261e5.webp"
            fullWidth={false}
            dot={false}
            heading="Let's work"
            headingLine2=""
            headingLine3=""
            rightHeading="Be the change you want to see - act now!"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
