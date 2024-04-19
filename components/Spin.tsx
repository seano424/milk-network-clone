import clsx from 'clsx'

interface SpinProps {
  className?: string
  size?: 'small' | 'medium' | 'large'
}

export default function Spin(props: SpinProps) {
  const { className, size = 'small' } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={clsx(
        'bg-black dark:bg-gray-950 text-gray-100 rounded-full',
        'transform group-hover:rotate-180 transition-all duration-700 ease-in-out',
        {
          'w-8 h-8 xl:w-12 xl:h-12': size === 'small',
          'w-10 h-10 xl:w-16 xl:h-16': size === 'medium',
          'w-12 h-12 xl:w-20 xl:h-20': size === 'large',
        },
        className
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
