import clsx from 'clsx'
import Link from 'next/link'

interface Props {
  title: string
  href?: string
  className?: string
  invert?: boolean
}

export default function AnimatedLink(props: Props) {
  const { title, href, className, invert } = props
  return (
    <>
      {href && (
        <Link
          className={clsx(className, 'relative group')}
          href={href}
        >
          {title}
          <span
            className={clsx(
              'absolute left-0 bottom-[1px] filter backdrop-contrast-200 h-[2px] group-hover:w-full w-0 transition-all duration-500 ease-in-out',
              invert ? 'bg-white' : 'bg-black'
            )}
          ></span>
        </Link>
      )}

      {!href && (
        <span className={clsx(className, 'relative group')}>
          {title}
          <span
            className={clsx(
              'absolute left-0 bottom-[1px] filter backdrop-contrast-200 h-[2px] group-hover:w-full w-0 transition-all duration-500 ease-in-out',
              invert ? 'bg-white' : 'bg-black'
            )}
          ></span>
        </span>
      )}
    </>
  )
}
