'use client'

import Filter from '@/components/Filter'

const filters = [
  'All works',
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

export default function WorkPage() {
  return (
    <div className="mt-20 p-4">
      <h1 className="text-6xl xl:text-9xl mb-28">Work</h1>

      <div className="flex justify-between">
        <Filter
          type="work"
          filters={filters}
        />
        <button>Grid/List</button>
      </div>
    </div>
  )
}
