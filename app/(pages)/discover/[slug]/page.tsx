import { stringToSlug } from '@/utilities/helpers'
import { newsItems } from '@/utilities/content'

import CtaDivider from '@/components/CtaDivider'
import NewsImageCtaGrid from '@/components/NewsImageCtaGrid'
import ImageRotateHeader from '@/components/ImageRotateHeader'
import DiscoverSidebarGrid from '@/components/DiscoverSidebarGrid'

export default function Page({ params }: { params: { slug: string } }) {
  const newsItem = newsItems.find(
    (item) => stringToSlug(item.title) === params.slug
  )

  if (!newsItem) {
    return false
  }

  return (
    <div className="mt-16 p-4">
      <ImageRotateHeader newsItem={newsItem} />
      <DiscoverSidebarGrid newsItem={newsItem} />
      <CtaDivider />
      <NewsImageCtaGrid />
    </div>
  )
}
