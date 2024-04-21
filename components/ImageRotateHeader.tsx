'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { newsItemType } from '@/utilities/content'

interface Props {
  newsItem: newsItemType
}

export default function ImageRotateHeader({ newsItem }: Props) {
  const [imageIndex, setImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => {
        if (newsItem) {
          return prevIndex === newsItem.images.length - 1 ? 0 : prevIndex + 1
        }
        return prevIndex
      })
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="relative h-12 w-20 float-left mr-4 mt-2">
        {newsItem.images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={newsItem.title}
            fill
            className={clsx(
              'object-cover rounded-lg',
              'transition-opacity duration-100 ease-in-out',
              imageIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          />
        ))}
      </div>
      <h4 className="text-6xl tracking-tighter">{newsItem.title}</h4>
    </>
  )
}
