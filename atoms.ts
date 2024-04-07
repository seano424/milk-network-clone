import { atom } from 'jotai'

export const modalAtom = atom(false)
export const loadingAtom = atom(false)
export const isTopAtom = atom(true)

export const filterAtom = atom({ type: '', filter: '' })
export const gridListAtom = atom<'grid' | 'list'>('grid')
