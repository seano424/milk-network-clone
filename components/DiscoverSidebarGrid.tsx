import Link from 'next/link'
import Image from 'next/image'
import { socials } from '@/utilities/links'

interface DiscoverNewsItemProps {
  newsItem: {
    date: string
    categories: string[]
    writer: string
    images: string[]
    description: string
  }
}

export default function DiscoverSidebarGrid(props: DiscoverNewsItemProps) {
  const { newsItem } = props
  return (
    <div className="grid grid-cols-12 min-h-full mt-10">
      {/* Left Sidebar */}
      <div className="col-span-4 sticky h-[25rem] top-20 flex flex-col">
        <div className="rounded-full p-2 bg-black text-xs tracking-tighter text-white h-10 w-10 flex items-center justify-center flex-shrink-0 my-4">
          milk
        </div>
        <div className="grid grid-cols-6 border-t py-2">
          <p className="col-span-2 text-gray-400">Date</p>
          <p className="col-span-4">{newsItem.date}</p>
        </div>
        <div className="grid grid-cols-6 border-t py-2">
          <p className="col-span-2 text-gray-400">Category</p>
          <p className="col-span-4">
            {newsItem.categories.map((cat) => (
              <span key={cat}>
                {cat}
                {/* add comma if more items */}
                {newsItem.categories.length > 1 &&
                  cat !== newsItem.categories[newsItem.categories.length - 1] &&
                  ', '}
              </span>
            ))}
          </p>
        </div>
        <div className="grid grid-cols-6 border-y py-2">
          <p className="col-span-2 text-gray-400">Writer</p>
          <p className="col-span-4">{newsItem.writer}</p>
        </div>

        <p className="col-span-2 text-gray-400 mt-20 border-b pb-2 mb-2">
          Share
        </p>

        <div className="flex gap-3">
          {socials.slice(0, 4).map((social) => (
            <Link
              key={social.href}
              href={social.href}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 30 30"
              >
                <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
              </svg>
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="col-span-8 flex flex-col p-4">
        <div className="bg-gray-200 h-80 w-full rounded-xl relative">
          <Image
            fill
            src={newsItem.images[0]}
            alt="feature image"
            sizes="(min-width: 640px) 640px, 100vw"
            className="rounded-xl object-cover scale-90"
          />
        </div>

        {/* Description */}
        <p className="tracking-wide">{newsItem.description}</p>

        {/* Our Message */}
        <p className="font-bold tracking-wide">
          We are proud to make all our eid artworks open-source for everyone to
          use. Additionally, we have also included heartfelt messages that can
          be seamlessly integrated into your greetings, allowing you to add a
          personal and heartfelt touch to your celebrations. As we come together
          to celebrate Eid, let us embrace the spirit of unity and generosity,
          spreading love and positivity throughout our communities. Wishing you
          all a blessed and joyous Eid al-Fitr!
        </p>

        {/* Images */}
        {newsItem.images.map((image) => (
          <div
            key={image}
            className="bg-gray-200 h-80 w-full rounded-xl relative"
          >
            <Image
              fill
              src={image}
              alt="feature image"
              sizes="(min-width: 640px) 640px, 100vw"
              className="rounded-xl object-cover scale-90"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
