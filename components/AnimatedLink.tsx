import clsx from 'clsx'
import Link from 'next/link'

interface Props {
  title?: string
  href?: string
  className?: string
  invert?: boolean
  email?: string
}

export default function AnimatedLink(props: Props) {
  const { title, href, className, invert, email } = props
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
              'absolute left-0 -bottom-1 filter backdrop-contrast-200 h-[4px] group-hover:w-full w-0 transition-all duration-500 ease-in-out',
              invert ? 'bg-white' : 'bg-black'
            )}
          ></span>
        </Link>
      )}

      {email && (
        <a
          className={clsx(className, 'relative group')}
          href={`mailto:${email}`}
          target="_blank"
        >
          {email}
          <span
            className={clsx(
              'absolute left-0 -bottom-1 filter backdrop-contrast-200 h-[4px] group-hover:w-full w-0 transition-all duration-500 ease-in-out ',
              invert ? 'bg-white' : 'bg-black'
            )}
          ></span>
        </a>
      )}

      {!href && !email && (
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
