import AnimatedText from '@/components/AnimatedText'

export default function TestPage() {
  return (
    <div className="p-4 pt-20 min-h-screen">
      <AnimatedText
        Tag={'h2'}
        text="Hello World"
      />
    </div>
  )
}
