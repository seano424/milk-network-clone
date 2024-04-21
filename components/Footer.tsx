'use client'

import Link from 'next/link'
import { useAtomValue } from 'jotai'
import { loadingAtom } from '@/atoms'
import { usePathname } from 'next/navigation'
import { offices, companyLinks, socials } from '@/utilities/links'

import AnimatedLink from './AnimatedLink'
import InputWithSvg from './InputWithSvg'

export default function Footer() {
  const loading = useAtomValue(loadingAtom)
  const pathname = usePathname()

  return (
    <>
      {(!loading || pathname !== '/') && (
        <footer className="py-5 bg-white relative z-20">
          {/* Top Row */}
          <div className="grid grid-cols-2 gap-3 border-b p-4">
            <Link
              href={'/'}
              className="font-black tracking-tighter text-[13rem] leading-[1]  text-transparent bg-clip-text bg-gradient-to-b from-gray-200 via-gray-300 to-gray-300 transition-all duration-500 ease-in-out opacity-60 hover:opacity-100"
            >
              milk
            </Link>
            <div className="max-w-64 pt-5 text-2xl leading-tight tracking-tight text-gray-900 dark:text-gray-200">
              <p>Milk Network TM</p>
              <p>
                is a brand development firm that works in thought and in action:
              </p>
              <AnimatedLink
                className="flex mt-3 w-max border-b-2 border-black"
                invert
                email={'hello@milknetwork.com'}
              />
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-2 py-10 px-4">
            {/* Left Side */}
            <div className="max-w-72 flex flex-col justify-between">
              <div>
                <h5 className="text-gray-400 mb-5">Newsletter</h5>

                <InputWithSvg className="w-max" />

                <p className="mt-4">
                  By subscribing you agree with our{' '}
                  <AnimatedLink
                    title="Privacy Policy"
                    href="/"
                    invert
                    className="border-b-2 border-black w-max"
                  />
                </p>
              </div>
              <p>© 2024 Milk Network. All right reserved</p>
            </div>

            {/* Right Side */}

            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col">
                <h5 className="text-gray-400 mb-5">Socials</h5>
                {socials.map(({ title, href }, i) => (
                  <AnimatedLink
                    key={i}
                    className="w-max text-xl"
                    href={href}
                    title={title}
                  />
                ))}
              </div>

              <div className="flex flex-col">
                <h5 className="text-gray-400 mb-5">Company</h5>
                {companyLinks.map(({ title, href }, i) => (
                  <AnimatedLink
                    key={i}
                    className="w-max text-xl"
                    href={href}
                    title={title}
                  />
                ))}
              </div>

              <div className="flex flex-col">
                <h5 className="text-gray-400 mb-5">Offices</h5>
                {offices.map(({ title, href }, i) => (
                  <AnimatedLink
                    key={i}
                    className="w-max text-xl"
                    href={href}
                    title={title}
                  />
                ))}
              </div>

              <AnimatedLink
                className="text-gray-400 mt-5 w-max"
                title="Terms, Privacy, Policy"
                href="/"
              />
            </div>
          </div>
        </footer>
      )}
    </>
  )
}
