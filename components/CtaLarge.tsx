import Image from 'next/image'
import CtaLink from './CtaLink'

interface CtaLargeProps {
  title?: string
  heading?: string
  link?: {
    label: string
    href: string
  }
  image?: string
}

export default function CtaLarge(props: CtaLargeProps) {
  const {
    title = 'Get in touch',
    heading = 'From dreams to reality: creating brands that change the world',
    link = { label: 'Contact us', href: '/' },
    image = 'https://strapi-cms-3mz0.onrender.com/uploads/img37_c440f34451.jpg',
  } = props
  return (
    <div className="p-4 h-full border-8">
      <div className="relative border-8 min-h-[600px] w-full rounded-lg">
        <Image
          fill
          sizes="100vw"
          src={image}
          alt={title}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 flex flex-col justify-between p-4 border-8">
          <h2 className="text-2xl max-w-80 xl:text-5xl text-white">
            {heading}
          </h2>

          <CtaLink
            link={link}
            title={title}
            fullWidth
            time
            className="!p-0"
          />
        </div>
      </div>
    </div>
  )
}
