import Link from 'next/link'
import Image from 'next/image'

const items = [
  {
    title: 'Strategy',
    href: '/',
    imgSrc:
      'https://strapi-cms-3mz0.onrender.com/uploads/small_5_copy_f6d04848b3.webp',
  },
  {
    title: 'Visual Identity',
    href: '/',
    imgSrc:
      'https://strapi-cms-3mz0.onrender.com/uploads/small_Identity_01_01_55c98615b3.webp',
  },
  {
    title: 'Communication',
    href: '/',
    imgSrc:
      'https://strapi-cms-3mz0.onrender.com/uploads/small_00_Cover_78239f9f60.jpg',
  },
]

export default function WhatWeDo() {
  return (
    <div className="p-4">
      <div className="border-t w-full relative top-6 flex items-center gap-2 pt-2">
        <span className="bg-black rounded-full h-3 w-3"></span>
        What we do
      </div>
      {items.map(({ href, imgSrc, title }) => (
        <Link
          href={href}
          className="grid grid-cols-2 border-b py-4 border-gray-200"
        >
          <div className="flex flex-col justify-end">{title}</div>
          <div className="w-full h-56 relative">
            <Image
              fill
              alt={title}
              src={imgSrc}
              className="object-cover rounded-lg"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
          </div>
        </Link>
      ))}
    </div>
  )
}
