import clsx from 'clsx'

interface InputWithSvgProps {
  className?: string
}

export default function InputWithSvg(props: InputWithSvgProps) {
  const { className } = props
  return (
    <div className={clsx('relative', className)}>
      <input
        type="text"
        className="bg-gray-100 rounded-lg p-3 text-gray-500 min-w-64 w-full outline-none transition-all duration-300 ease-in-out focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
        placeholder="Enter your email"
      />

      <button className="group">
        <span className="absolute top-0 bottom-0 right-2 flex items-center justify-center w-8 overflow-hidden z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={clsx(
              'h-6 w-6',
              'transition-all duration-700 transform ease-in-out opacity-100',
              'group-hover:animate-button-icon-movement'
            )}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </span>
      </button>
    </div>
  )
}
