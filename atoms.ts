import { atom } from 'jotai'

export const modalAtom = atom(false)
export const loadingAtom = atom(true)
export const isTopAtom = atom(true)

export const filterAtom = atom({ type: '', filter: '', isOpen: false })
export const gridListAtom = atom<'grid' | 'list'>('grid')

export const itemsToShowAtom = atom(4)
