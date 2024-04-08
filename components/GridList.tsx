'use client'

import { useAtomValue } from 'jotai'
import { gridListAtom } from '@/atoms'
import Filter from '@/components/Filter'
import { workFilters } from '@/utilities/filters'
import ImageCtaGrid from '@/components/ImageCtaGrid'
import GridListButton from '@/components/GridListButton'

export default function GridList() {
  const gridList = useAtomValue(gridListAtom)
  const isGrid = gridList === 'grid'

  return (
    <div className="flex flex-col relative gap-8">
      <div className="flex gap-5 justify-between items-end">
        <Filter
          type="work"
          filters={workFilters}
        />
        <GridListButton />
      </div>

      {isGrid && <ImageCtaGrid />}
    </div>
  )
}
