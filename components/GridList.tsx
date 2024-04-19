'use client'

import { useAtomValue } from 'jotai'
import { gridListAtom } from '@/atoms'

import { workFilters, newsFilters, communityFilters } from '@/utilities/filters'

import Filter from '@/components/Filter'
import ImageCtaList from './ImageCtaList'
import ImageCtaGrid from '@/components/ImageCtaGrid'
import GridListButton from '@/components/GridListButton'

interface GridListProps {
  type: 'work' | 'community' | 'news'
}

export default function GridList(props: GridListProps) {
  const { type } = props
  const gridList = useAtomValue(gridListAtom)
  const isGrid = gridList === 'grid'

  let filterType: string[] = []

  switch (type) {
    case 'work':
      filterType = workFilters
      break
    case 'community':
      filterType = communityFilters
      break
    case 'news':
      filterType = newsFilters
      break
    default:
      break
  }

  return (
    <div className="flex flex-col relative gap-8">
      <div className="flex gap-5 justify-between items-end">
        <Filter
          type={type}
          filters={filterType}
        />
        <GridListButton />
      </div>

      {isGrid && <ImageCtaGrid />}
      {!isGrid && <ImageCtaList />}
    </div>
  )
}
