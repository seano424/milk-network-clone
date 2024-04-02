'use client'

import AnimatedText from '@/components/AnimatedText'
import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import { loadingAtom } from '@/atoms'
import { useAtomValue } from 'jotai'
import Header from '@/components/Header'
import NumbersAndFactsGrid from '@/components/NumbersAndFactsGrid'
import AboutUs from '@/components/AboutUs'
import WhatWeDo from '@/components/WhatWeDo'

export default function Home() {
  const loading = useAtomValue(loadingAtom)

  return (
    <main>
      {/* <Intro /> */}
      {!loading && (
        <>
          <Header />
          <Hero />
          <NumbersAndFactsGrid />
          <AboutUs />
          <WhatWeDo />
        </>
      )}
    </main>
  )
}
