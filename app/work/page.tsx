import Filter from '@/components/Filter'
import { workFilters } from '@/utilities/filters'

export default function WorkPage() {
  return (
    <div className="mt-20 p-4">
      <h1 className="text-6xl xl:text-9xl mb-28">Work</h1>

      <div className="flex justify-between">
        <Filter
          type="work"
          filters={workFilters}
        />
        <button>Grid/List</button>
      </div>
    </div>
  )
}
