import clsx from 'clsx'

export default function Spin() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={clsx(
        'w-8 h-8 xl:w-12 xl:h-12 bg-black dark:bg-gray-950 text-gray-100 rounded-full',
        'transform group-hover:rotate-180 transition-all duration-700 ease-in-out'
      )}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  )
}
