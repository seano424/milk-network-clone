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
  fullWidth?: boolean
  dot?: boolean
  rightHeading?: string
}

export default function CtaLarge(props: CtaLargeProps) {
  const {
    title = 'Get in touch',
    heading = 'From dreams to reality: ',
    headingLine2 = 'creating brands that',
    headingLine3 = 'change the world',
    link = { label: 'Contact us', href: '/' },
    image = 'https://strapi-cms-3mz0.onrender.com/uploads/img37_c440f34451.jpg',
    fullWidth = true,
    dot = true,
    rightHeading,
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
        {/* overlay with bg gradient to top */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/30" />

        <div className="absolute inset-0 flex flex-col justify-between p-4">
          <div className="flex justify-between">
            <div className="max-w-[23rem] lg:max-w-[50rem]">
              <div className="flex gap-1">
                {dot && (
                  <div className="h-7 w-7 rounded-full bg-black flex-shrink-0" />
                )}
                <h2 className="text-black dark:text-white flex items-center gap-2 text-2xl xl:text-4xl">
                  {heading}
                </h2>
              </div>
              <h2 className="text-black dark:text-white text-2xl xl:text-4xl">
                {headingLine2}
              </h2>
              <h2 className="text-black dark:text-white text-2xl xl:text-4xl">
                {headingLine3}
              </h2>
            </div>
            {rightHeading && (
              <h2 className="text-black dark:text-white text-2xl xl:text-4xl max-w-[23rem]">
                {rightHeading}
              </h2>
            )}
          </div>

          <CtaLink
            time
            fullWidth={fullWidth}
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
