import { stringToSlug } from '@/utilities/helpers'
import { newsItems } from '@/utilities/workItems'

import ImageRotateHeader from '@/components/ImageRotateHeader'

export default function Page({ params }: { params: { slug: string } }) {
  const newsItem = newsItems.find(
    (item) => stringToSlug(item.title) === params.slug
  )

  return (
    <div className="mt-16">
      {newsItem && (
        <div className="p-4">
          <ImageRotateHeader newsItem={newsItem} />
        </div>
      )}
    </div>
  )
}
