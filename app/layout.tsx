import clsx from 'clsx'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import Cursor from '@/components/Cursor'
import Footer from '@/components/Footer'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const devMode = process.env.NODE_ENV === 'development'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={clsx(
          dmSans.className,
          devMode && 'debug-screens',
          'bg-white flex flex-col min-h-screen'
        )}
      >
        <Cursor />
        <Providers>
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
