export type Community =
  | 'Administration'
  | 'Brand Relations'
  | 'Creative'
  | 'Strategy'
  | 'Technology'

export type News = 'Insights & Reflection' | 'Updates' | 'Work'

export type Work =
  | 'Campaign'
  | 'Communication'
  | 'Editorial'
  | 'Naming'
  | 'Packaging'
  | 'Re-branding'
  | 'Social Media'
  | 'Sonic'
  | 'Strategy'
  | 'Visual Identity'
  | 'Way-finding'
  | 'Web Design'

export const communityFilters: Community[] = [
  'Administration',
  'Brand Relations',
  'Creative',
  'Strategy',
  'Technology',
]

export const newsFilters: News[] = ['Insights & Reflection', 'Updates', 'Work']

export const workFilters: Work[] = [
  'Campaign',
  'Communication',
  'Editorial',
  'Naming',
  'Packaging',
  'Re-branding',
  'Social Media',
  'Sonic',
  'Strategy',
  'Visual Identity',
  'Way-finding',
  'Web Design',
]
