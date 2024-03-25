import AnimatedText from '@/components/AnimatedText'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main>
      <Hero />

      <div>
        <video
          className="w-full h-full entered loaded"
          autoPlay
          muted
          loop
          playsInline
          src="https://strapi-cms-3mz0.onrender.com/uploads/240123_Milk_Video_2024_Low_V2_8abec16071.mp4"
        ></video>
      </div>

      <div className="px-4 py-10 flex justify-end">
        <AnimatedText
          Tag={'p'}
          text="hello world"
        />
      </div>
    </main>
  )
}
