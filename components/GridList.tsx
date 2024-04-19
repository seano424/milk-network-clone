'use client'

import { useAtomValue } from 'jotai'
import { gridListAtom } from '@/atoms'

import { workFilters, newsFilters, communityFilters } from '@/utilities/filters'

import Filter from '@/components/Filter'
import ImageCtaList from './WorkImageCtaList'
import ImageCtaGrid from '@/components/WorkImageCtaGrid'
import GridListButton from '@/components/GridListButton'
import clsx from 'clsx'

interface GridListProps {
  type: 'work' | 'community' | 'news'
  toggle?: boolean
  className?: string
  isVertical?: boolean
  allText?: string
}

export default function GridList(props: GridListProps) {
  const {
    type,
    toggle = true,
    className,
    isVertical = false,
    allText = 'All',
  } = props
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
    <div className={clsx('flex flex-col relative gap-8')}>
      <div className="flex gap-5 justify-between items-end">
        <Filter
          type={type}
          className={className}
          filters={filterType}
          isVertical={isVertical}
          allText={allText}
        />
        {toggle && <GridListButton />}
      </div>

      {isGrid && type === 'work' && <ImageCtaGrid />}
      {!isGrid && type === 'work' && <ImageCtaList />}
    </div>
  )
}
