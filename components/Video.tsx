'use client'

import { useState } from 'react'
import { motion, useTransform } from 'framer-motion'

interface VideoProps {
  scrollYProgress: any
}

export default function Video(props: VideoProps) {
  const { scrollYProgress } = props
  const [isMuted, setIsMuted] = useState(true)

  const inputRange = [0, 1]
  const outputRange = [0.8, 1]
  const scale = useTransform(scrollYProgress, inputRange, outputRange)
  const clipPath = useTransform(scrollYProgress, inputRange, [
    'inset(33% round 1rem)',
    'inset(0% round 0rem)',
  ])

  const handleVideoClick = () => {
    setIsMuted(!isMuted)
  }

  return (
    <div className="absolute left-0 top-0 w-full h-full p-4">
      <div className="h-screen flex items-center justify-center sticky top-0">
        <motion.button
          onClick={handleVideoClick}
          style={{ scale, clipPath }}
          className="bg-black rounded relative w-full h-full aspect-video min-h-[25rem] cursor-default"
        >
          <video
            className="w-full h-full entered loaded"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            src="https://strapi-cms-3mz0.onrender.com/uploads/240123_Milk_Video_2024_Low_V2_8abec16071.mp4"
          ></video>
          <div
            id="video"
            className="absolute inset-0 flex gap-2 items-center justify-center text-6xl text-white"
          >
            <span className="rounded-full bg-white h-10 w-10"></span>
            Play
          </div>
        </motion.button>
      </div>
    </div>
  )
}
