import Filter from '@/components/Filter'
import GridListButton from '@/components/GridListButton'
import ImageCtaGrid from '@/components/ImageCtaGrid'
import { workFilters } from '@/utilities/filters'

export default function WorkPage() {
  return (
    <div className="mt-20 p-4">
      <h1 className="text-6xl xl:text-9xl mb-28">Work</h1>

      <div className="flex gap-5 justify-between items-end">
        <Filter
          type="work"
          filters={workFilters}
        />
        <GridListButton />
      </div>

      <ImageCtaGrid />
    </div>
  )
}
