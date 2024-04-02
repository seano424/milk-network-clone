import Image from 'next/image'
import Link from 'next/link'
import AnimatedLink from './AnimatedLink'
import clsx from 'clsx'

const gridItems = [
  {
    title: 'Get started',
    description: 'Start your journey with us today',
    image: 'https://source.unsplash.com/random',
    year: '2021',
    href: '/',
    spansTwoColumns: false,
  },
  {
    title: 'Get started',
    description: 'Start your journey with us today',
    image: 'https://source.unsplash.com/random',
    year: '2021',
    href: '/',
    spansTwoColumns: false,
  },
  {
    title: 'Get started',
    description: 'Start your journey with us today',
    image: 'https://source.unsplash.com/random',
    year: '2021',
    href: '/',
    spansTwoColumns: false,
  },
  {
    title: 'Get started',
    description: 'Start your journey with us today',
    image: 'https://source.unsplash.com/random',
    year: '2021',
    href: '/',
    spansTwoColumns: true,
  },
  {
    title: 'Get started',
    description: 'Start your journey with us today',
    image: 'https://source.unsplash.com/random',
    year: '2021',
    href: '/',
    spansTwoColumns: true,
  },
  {
    title: 'Get started',
    description: 'Start your journey with us today',
    image: 'https://source.unsplash.com/random',
    year: '2021',
    href: '/',
    spansTwoColumns: false,
  },
  {
    title: 'Get started',
    description: 'Start your journey with us today',
    image: 'https://source.unsplash.com/random',
    year: '2021',
    href: '/',
    spansTwoColumns: false,
  },
  {
    title: 'Get started',
    description: 'Start your journey with us today',
    image: 'https://source.unsplash.com/random',
    year: '2021',
    href: '/',
    spansTwoColumns: false,
  },
  {
    title: 'Get started',
    description: 'Start your journey with us today',
    image: 'https://source.unsplash.com/random',
    year: '2021',
    href: '/',
    spansTwoColumns: false,
  },
  {
    title: 'Get started',
    description: 'Start your journey with us today',
    image: 'https://source.unsplash.com/random',
    year: '2021',
    href: '/',
    spansTwoColumns: true,
  },
]

export default function ImageCtaGrid() {
  return (
    <div className="grid grid-cols-4 gap-5 p-4">
      {gridItems.map((item, index) => (
        <div
          className={clsx(
            item.spansTwoColumns ? 'col-span-2 xl:col-span-1' : 'col-span-2',
            'group'
          )}
          key={index}
        >
          <Link
            href={item.href}
            id="link"
          >
            <div className="flex flex-col gap-4">
              <div
                className={clsx(
                  'rounded-lg relative h-80 w-full overflow-hidden',
                  item.spansTwoColumns ? 'xl:h-80' : 'xl:h-[40rem]'
                )}
              >
                <Image
                  fill
                  sizes="50vw"
                  src={item.image ?? 'https://source.unsplash.com/random'}
                  alt={item.title}
                  className="w-full h-48 object-cover object-center mb-5 rounded-lg group-hover:scale-125 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div>
                <AnimatedLink
                  className="pb-[2px]"
                  title={item.title}
                />
                <p className="text-gray-500">{item.description}</p>
                <p className="text-gray-400 text-sm">({item.year})</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}
