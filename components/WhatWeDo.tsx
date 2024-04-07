import WhatWeDoBox from './WhatWeDoBox'

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
    <div>
      <div className="border-t w-full relative top-6 flex items-center gap-2 pt-2">
        <span className="bg-black rounded-full h-3 w-3"></span>
        What we do
      </div>
      {items.map(({ href, imgSrc, title }, index) => (
        <WhatWeDoBox
          key={index}
          item={{ href, imgSrc, title }}
        />
      ))}
    </div>
  )
}
