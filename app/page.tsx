'use client'

import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import { loadingAtom } from '@/atoms'
import { useAtomValue } from 'jotai'
import Header from '@/components/Header'
import NumbersAndFactsGrid from '@/components/NumbersAndFactsGrid'
import CtaLink from '@/components/CtaLink'
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
          <CtaLink
            copy
            link={{ href: '/', label: 'Read more' }}
            text="12-24"
            title="About us"
          />
          <WhatWeDo />
        </>
      )}
    </main>
  )
}
