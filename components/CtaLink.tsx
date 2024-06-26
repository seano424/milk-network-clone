'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface CtaLinkProps {
  title: string
  text?: string
  blink?: boolean
  copy?: boolean
  time?: boolean
  fullWidth?: boolean
  link: {
    label: string
    href: string
  }
  className?: string
  decorative?: boolean
  theme?: 'light' | 'dark'
}

export default function CtaLink(props: CtaLinkProps) {
  const {
    title,
    text,
    blink,
    link,
    copy,
    fullWidth,
    time,
    className,
    decorative = false,
    theme = 'dark',
  } = props

  const [currentTime, setCurrentTime] = useState({
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
  })

  const darkTheme = theme === 'dark'

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime({
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
      })
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={clsx('grid grid-cols-2 py-20', className)}>
      <div
        className={clsx(
          'flex flex-col gap-2 ',
          fullWidth ? 'col-span-2' : 'col-start-2'
        )}
      >
        <div
          className={clsx(
            'flex justify-between items-center text-xl xl:text-5xl',
            darkTheme ? 'text-black' : 'text-white'
          )}
        >
          <p>{title}</p>
          <p>
            {copy && <span>&copy;</span>}
            {blink && <span className="animate-blink inline-block">_</span>}
            {text && <span>{text}</span>}
            {time && (
              <span className="flex items-center">
                {currentTime.hour}
                <span className="animate-blink">:</span>
                {currentTime.minute}
              </span>
            )}
          </p>
        </div>

        {!decorative && (
          <Link
            href={link.href}
            className={clsx(
              'flex justify-between items-center w-full rounded-lg py-3 px-4 relative group  overflow-hidden xl:text-xl',
              darkTheme ? 'bg-black text-white' : 'bg-white text-black'
            )}
          >
            <div className="w-full h-full">
              <span
                className={clsx(
                  'absolute flex items-center px-4 inset-0 transform transition-transform duration-300 ease-linear translate-y-0',
                  'group-hover:-translate-y-12'
                )}
              >
                {link.label}
              </span>
              <span
                className={clsx(
                  'absolute flex items-center px-4 inset-0 transform transition-transform duration-300 ease-linear translate-y-12',
                  'group-hover:translate-y-0 z-10',
                  darkTheme
                    ? 'group-hover:bg-gray-700/70'
                    : 'group-hover:bg-gray-200/70'
                )}
              >
                {link.label}
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
        )}

        {decorative && (
          <div
            className={clsx(
              'flex justify-between items-center w-full rounded-lg py-3 px-4 relative group  overflow-hidden xl:text-xl',
              darkTheme ? 'bg-black text-white' : 'bg-white text-black'
            )}
          >
            <div className="w-full h-full">
              <span
                className={clsx(
                  'absolute flex items-center px-4 inset-0 transform transition-transform duration-300 ease-linear translate-y-0',
                  'group-hover:-translate-y-12'
                )}
              >
                {link.label}
              </span>
              <span
                className={clsx(
                  'absolute flex items-center px-4 inset-0 transform transition-transform duration-300 ease-linear translate-y-12',
                  'group-hover:translate-y-0 z-10',
                  darkTheme
                    ? 'group-hover:bg-gray-700/70'
                    : 'group-hover:bg-gray-200/70'
                )}
              >
                {link.label}
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
          </div>
        )}
      </div>
    </div>
  )
}
