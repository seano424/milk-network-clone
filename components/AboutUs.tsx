import Link from 'next/link'
import clsx from 'clsx'

export default function AboutUs() {
  return (
    <div className="grid grid-cols-2 px-4 py-20">
      <div className="col-start-2 flex flex-col gap-2">
        <div className="flex justify-between items-center text-xl xl:text-5xl">
          <p>About us</p>
          <p>&copy; 12-24</p>
        </div>

        <Link
          href="/"
          className="flex justify-between items-center bg-black w-full rounded-lg py-3 px-4 text-white relative group  overflow-hidden xl:text-xl"
        >
          <div className="w-full h-full">
            <span
              className={clsx(
                'absolute flex items-center px-4 inset-0 transform transition-transform duration-300 ease-linear translate-y-0',
                'group-hover:-translate-y-12'
              )}
            >
              Read more
            </span>
            <span
              className={clsx(
                'absolute flex items-center px-4 inset-0 transform transition-transform duration-300 ease-linear translate-y-12',
                'group-hover:translate-y-0 z-10',
                'group-hover:bg-gray-700/70'
              )}
            >
              Read more
            </span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 xl:h-10 xl:w-10 relative z-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}
