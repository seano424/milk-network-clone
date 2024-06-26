import clsx from 'clsx'
import Link from 'next/link'
import Spin from './Spin'

interface BoxProps {
  title: string
  label: string
  oneColumn?: boolean
}

export const Box = (props: BoxProps) => {
  const { title, label, oneColumn } = props

  return (
    <Link
      href={'/'}
      className={clsx(
        'h-full w-full rounded-xl flex flex-col justify-between',
        'py-4 bg-gray-100 dark:bg-gray-950 text-black dark:text-white relative',
        'group hover:bg-yellow-300 dark:hover:bg-sky-950 transition-all duration-300 ease-in-out',
        oneColumn && 'col-span-2'
      )}
    >
      <div className="text-6xl xl:text-9xl px-4">{title}+</div>
      <div className="text-xl xl:text-3xl flex flex-col gap-4 border-t py-4 px-4">
        <p>{label}</p>
        <Spin />
      </div>
    </Link>
  )
}

export default function NumbersAndFactsGrid() {
  return (
    <div className="grid grid-cols-4 gap-2 h-[800px] xl:h-[900px]">
      <div className="bg-black dark:bg-gray-950 h-full w-full rounded-xl col-span-2">
        <h1 className="text-4xl xl:text-6xl tracking-tighter font-medium p-4 text-white flex items-center gap-2">
          <span className="bg-white h-10 w-10 rounded-full" />
          Numbers and Facts
        </h1>
      </div>
      <Box
        label="Brands"
        title="200"
      />
      <Box
        label="Videos"
        title="120"
      />

      <Box
        label="Strategies"
        title="78"
        oneColumn
      />
      <Box
        label="Industries"
        title="16"
        oneColumn
      />
    </div>
  )
}
