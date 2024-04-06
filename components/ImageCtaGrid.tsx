import Image from 'next/image'
import Link from 'next/link'
import AnimatedLink from './AnimatedLink'
import clsx from 'clsx'

const gridItems = [
  {
    title: 'Get started',
    description: 'Start your journey with us today',
    image:
      'https://strapi-cms-3mz0.onrender.com/uploads/240128_Thamanya_Logo_11_1954fb6e78.webp',
    year: '2021',
    href: '/',
    spansTwoColumns: false,
  },
  {
    title: 'Get started',
    description: 'Start your journey with us today',
    image:
      'https://strapi-cms-3mz0.onrender.com/uploads/small_Trita_Logo_01_c71d1eeb49.webp',
    year: '2021',
    href: '/',
    spansTwoColumns: false,
  },
  {
    title: 'Get started',
    description: 'Start your journey with us today',
    image:
      'https://strapi-cms-3mz0.onrender.com/uploads/small_Cover_2_copy_79f43981c7.webp',
    year: '2021',
    href: '/',
    spansTwoColumns: false,
  },
  {
    title: 'Get started',
    description: 'Start your journey with us today',
    image:
      'https://strapi-cms-3mz0.onrender.com/uploads/small_Thumbnail_copy_70ffc96f9f.webp',
    year: '2021',
    href: '/',
    spansTwoColumns: true,
  },
  {
    title: 'Get started',
    description: 'Start your journey with us today',
    image:
      'https://strapi-cms-3mz0.onrender.com/uploads/small_Core_Fitness_d26e907971.webp',
    year: '2021',
    href: '/',
    spansTwoColumns: true,
  },
  {
    title: 'Get started',
    description: 'Start your journey with us today',
    image:
      'https://strapi-cms-3mz0.onrender.com/uploads/small_00_Cover_copy_9186ab4156.jpg',
    year: '2021',
    href: '/',
    spansTwoColumns: false,
  },
  {
    title: 'Get started',
    description: 'Start your journey with us today',
    image:
      'https://strapi-cms-3mz0.onrender.com/uploads/small_00_Cover_copy_9da39e6ecb.webp',
    year: '2021',
    href: '/',
    spansTwoColumns: false,
  },
  {
    title: 'Get started',
    description: 'Start your journey with us today',
    image:
      'https://strapi-cms-3mz0.onrender.com/uploads/small_01_Cover_aaaee6715e.webp',
    year: '2021',
    href: '/',
    spansTwoColumns: false,
  },
  {
    title: 'Get started',
    description: 'Start your journey with us today',
    image:
      'https://strapi-cms-3mz0.onrender.com/uploads/small_00_Cover_da55171b65.webp',
    year: '2021',
    href: '/',
    spansTwoColumns: false,
  },
  {
    title: 'Get started',
    description: 'Start your journey with us today',
    image:
      'https://strapi-cms-3mz0.onrender.com/uploads/small_009_copy_292b10a1de.webp',
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
