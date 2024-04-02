'use client'
import { useEffect, useState } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from 'framer-motion'
import clsx from 'clsx'

export default function Cursor() {
  const [isHoveringAnimation, setIsHoveringAnimation] = useState(false)
  const [typeOfElement, setTypeOfElement] = useState<'video' | 'link' | ''>(
    'video'
  )
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springConfig = { damping: 20, stiffness: 120 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }

    const handleHoverVideo = () => {
      document.querySelectorAll('#video').forEach((video) => {
        video.addEventListener('mouseenter', () => {
          setTimeout(() => {
            setIsHoveringAnimation(true)
            setTypeOfElement('video')
          }, 200)
        })
        video.addEventListener('mouseleave', () => {
          setIsHoveringAnimation(false)
          setTypeOfElement('')
        })
      })
    }

    const handleHoverLink = () => {
      document.querySelectorAll('#link').forEach((item) => {
        item.addEventListener('mouseenter', () => {
          setTimeout(() => {
            setIsHoveringAnimation(true)
            setTypeOfElement('link')
          }, 200)
        })
        item.addEventListener('mouseleave', () => {
          setIsHoveringAnimation(false)
          setTypeOfElement('')
        })
      })
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseover', handleHoverVideo)
    window.addEventListener('mouseover', handleHoverLink)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', handleHoverVideo)
      window.removeEventListener('mouseover', handleHoverLink)
    }
  }, [cursorX, cursorY])

  return (
    <motion.div
      style={{ translateX: cursorXSpring, translateY: cursorYSpring }}
      animate={{
        scale: isHoveringAnimation ? 2.5 : 1,
        transition: { duration: 0.2 },
      }}
      className={clsx(
        'z-50 fixed left-0 top-0 min-w-8 min-h-8 rounded-full pointer-events-none flex items-center justify-center',
        isHoveringAnimation
          ? 'bg-black text-white'
          : 'mix-blend-difference bg-white'
      )}
    >
      <AnimatePresence>
        {typeOfElement === 'video' && (
          <svg
            key="cursor"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-2 h-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
            />
          </svg>
        )}

        {typeOfElement === 'link' && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-2 h-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
            />
          </svg>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
