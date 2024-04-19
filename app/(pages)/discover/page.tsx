import { workItems } from '@/utilities/workItems'

import CtaCard from '@/components/CtaCard'
import HeroText from '@/components/HeroText'

export default function DiscoverPage() {
  const latestWork = workItems.sort((a, b) => b.year - a.year)[0]

  return (
    <div className="mt-20 flex flex-col gap-8">
      <div className="fixed top-20 inset-0">
        <HeroText
          className="mb-10"
          header="The Latest"
          subheader="Discover our thought leadership and expert insights on vision,
          strategy, culture, and brand, and learn how to apply them to your
          business."
        />

        <CtaCard work={latestWork} />
      </div>

      <div className="min-h-screen relative mt-[100vh] bg-blue-500"></div>
    </div>
  )
}
