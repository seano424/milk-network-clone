import Link from 'next/link'
import AnimatedLink from './AnimatedLink'
import { offices, companyLinks, socials } from '@/utilities/links'

export default function Footer() {
  return (
    <footer className="">
      <div className="grid grid-cols-2 gap-3 border-b-2 py-5">
        <Link
          href={'/'}
          className="font-black tracking-tight text-[13rem] leading-[1]  text-transparent bg-clip-text bg-gradient-to-b from-gray-200 via-gray-300 to-gray-300 transition-all duration-500 ease-in-out opacity-60 hover:opacity-100"
        >
          milk
        </Link>
        <div className="max-w-64 pt-5 text-2xl leading-tight tracking-tight text-gray-900">
          <p>Milk Network TM</p>
          <p>
            is a brand development firm that works in thought and in action:
          </p>
          <AnimatedLink
            className="mt-4 flex w-max border-b-2 border-black"
            invert
            email={'hello@milknetwork.com'}
          />
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div></div>
        <div></div>
      </div>
    </footer>
  )
}
