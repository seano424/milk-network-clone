'use client'

import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import { loadingAtom } from '@/atoms'
import { useAtomValue } from 'jotai'
import NumbersAndFactsGrid from '@/components/NumbersAndFactsGrid'
import CtaLink from '@/components/CtaLink'
import WhatWeDo from '@/components/WhatWeDo'
import CtaSpacer from '@/components/CtaSpacer'
import ImageCtaGrid from '@/components/WorkImageCtaGrid'
import CtaLarge from '@/components/CtaLarge'

export default function Home() {
  const loading = useAtomValue(loadingAtom)

  return (
    <main>
      <Intro />
      {!loading && (
        <div className='p-4 flex flex-col gap-4'>
          <Hero />
          <NumbersAndFactsGrid />
          <CtaLink
            copy
            link={{ href: '/', label: 'Read more' }}
            text="12-24"
            title="About us"
          />
          <WhatWeDo />
          <CtaSpacer />
          <ImageCtaGrid />
          <CtaLink
            blink
            link={{ href: '/', label: 'Discover all works' }}
            text="31"
            title="Works"
          />
          <CtaLarge />
        </div>
      )}
    </main>
  )
}
