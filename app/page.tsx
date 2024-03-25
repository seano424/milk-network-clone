'use client'

import AnimatedText from '@/components/AnimatedText'
import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import { loadingAtom } from '@/atoms'
import { useAtomValue } from 'jotai'
import Header from '@/components/Header'
import NumbersAndFactsGrid from '@/components/NumbersAndFactsGrid'

export default function Home() {
  const loading = useAtomValue(loadingAtom)

  return (
    <main>
      <Intro />
      {!loading && (
        <>
          <Header />
          <Hero />
          <NumbersAndFactsGrid />
        </>
      )}
    </main>
  )
}
