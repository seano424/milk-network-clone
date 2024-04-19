import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import Spin from '@/components/Spin'
import AnimatedLink from '@/components/AnimatedLink'

interface CtaCardProps {
  work: {
    title: string
    href: string
    images: string[]
    date: string
    categories: string[]
    description: string
  }
}

export default function CtaCard(props: CtaCardProps) {
  const { work } = props

  return (
    <Link
      href={work.href}
      className="bg-gray-100 p-4 grid grid-cols-2 gap-8 pb-20 group"
    >
      <div className="relative h-72 w-full bg-gray-200 rounded-lg">
        <div className="absolute inset-0 bottom-20 overflow-hidden rounded-t-lg">
          <Image
            fill
            src={work.images[0]}
            alt={work.title}
            className={clsx(
              'object-cover object-center',
              'transition-transform duration-700 ease-in-out',
              'group-hover:scale-110'
            )}
          />
        </div>
        <div className="absolute inset-0 p-3">
          <div className="bg-white rounded-lg p-2 px-3 w-max">{work.date}</div>
        </div>
      </div>

      <div className="flex flex-col justify-between border-b border-gray-400 pb-7">
        <div className="grid gap-1">
          <AnimatedLink
            className="text-4xl tracking-tight mb-4"
            title={work.title}
          />
          <div className="flex gap-2 flex-wrap">
            {work.categories.map((cat) => (
              <span
                key={cat}
                className="bg-black rounded-lg px-3 py-2 text-white"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-end gap-10 ">
          <p>{work.description}</p>
          <Spin className="flex-shrink-0" />
        </div>
      </div>
    </Link>
  )
}
