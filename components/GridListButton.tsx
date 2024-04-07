'use client'

import clsx from 'clsx'
import { useAtom } from 'jotai'
import { gridListAtom } from '@/atoms'

export default function GridListButton() {
  const [isGridOrList, setIsGridOrList] = useAtom(gridListAtom)
  const isList = isGridOrList === 'list'

  return (
    <div className="flex items-center gap-2 text-xl">
      <button
        onClick={() => setIsGridOrList('grid')}
        className={clsx(isList ? 'text-gray-300' : 'text-black')}
      >
        Grid
      </button>
      <span>/</span>
      <button
        onClick={() => setIsGridOrList('list')}
        className={clsx(isList ? 'text-black' : 'text-gray-300')}
      >
        List
      </button>
    </div>
  )
}
