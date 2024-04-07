import Link from 'next/link'

export default function Logo() {
  return (
    <Link
      href={'/'}
      className={'font-bold text-4xl tracking-tight'}
    >
      milk
    </Link>
  )
}
