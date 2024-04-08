import { atom } from 'jotai'
// import { Work } from '@/utilities/filters'
// import { gridItems } from '@/utilities/gridItems'

export const modalAtom = atom(false)
export const loadingAtom = atom(false)
export const isTopAtom = atom(true)

export const filterAtom = atom({ type: '', filter: '', isOpen: false })
export const gridListAtom = atom<'grid' | 'list'>('grid')

// const filteredItems = gridItems.filter((gridItem) => {
//   if (filterAtom.filter === '') return gridItem
//   return gridItem.categories.includes(filterState.filter as Work)
// })
