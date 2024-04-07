import Link from 'next/link'
import Image from 'next/image'
import CtaLink from './CtaLink'

interface CtaLargeProps {
  title?: string
  heading?: string
  headingLine2?: string
  headingLine3?: string
  link?: {
    label: string
    href: string
  }
  image?: string
}

export default function CtaLarge(props: CtaLargeProps) {
  const {
    title = 'Get in touch',
    heading = 'From dreams to reality: ',
    headingLine2 = 'creating brands that',
    headingLine3 = 'change the world',
    link = { label: 'Contact us', href: '/' },
    image = 'https://strapi-cms-3mz0.onrender.com/uploads/img37_c440f34451.jpg',
  } = props
  return (
    <Link
      id="link"
      href={link.href}
      className="block h-full w-full"
    >
      <div className="relative min-h-[600px] w-full rounded-lg">
        <Image
          fill
          sizes="100vw"
          src={image}
          alt={title}
          className="object-cover object-center rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col justify-between p-4">
          <div className="max-w-[23rem] lg:max-w-[50rem]">
            <h2 className="text-black flex items-center gap-2 text-3xl xl:text-5xl before:h-7 before:w-7 before:rounded-full before:bg-black before:flex-shrink-0">
              {heading}
            </h2>
            <h2 className="text-black text-3xl xl:text-5xl">{headingLine2}</h2>
            <h2 className="text-black text-3xl xl:text-5xl">{headingLine3}</h2>
          </div>

          <CtaLink
            time
            fullWidth
            decorative
            link={link}
            title={title}
            className="!p-0"
          />
        </div>
      </div>
    </Link>
  )
}
