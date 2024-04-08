import clsx from 'clsx'
import Link from 'next/link'

interface Props {
  title?: string
  href?: string
  className?: string
  invert?: boolean
  email?: string
}

export const Span = ({ invert }: { invert?: boolean }) => {
  return (
    <span
      className={clsx(
        'absolute left-0 -bottom-[2px] filter backdrop-contrast-200 h-[2px] group-hover:w-full w-0 transition-all duration-500 ease-in-out z-10',
        invert ? 'bg-white' : 'bg-black'
      )}
    ></span>
  )
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
          <Span invert={invert} />
        </Link>
      )}

      {!href && email && (
        <a
          className={clsx(className, 'relative group')}
          href={`mailto:${email}`}
          target="_blank"
        >
          {email}
          <Span invert={invert} />
        </a>
      )}

      {!href && !email && (
        <span className={clsx(className, 'relative group')}>
          {title}
          <Span invert={invert} />
        </span>
      )}
    </>
  )
}
