import DotAndText from './DotAndText'
import AnimatedLink from './AnimatedLink'

interface CtaDividerProps {
  dotAndText?: string
  ctaText?: string
  label?: string
}

export default function CtaDivider(props: CtaDividerProps) {
  const {
    dotAndText = 'You might also like',
    ctaText = 'We are the agents of change who pursue to strengthen the creative economy.',
    label = 'View all',
  } = props
  return (
    <div className="grid grid-cols-12 my-20 border-t border-gray-300 pt-5">
      <div className="col-span-6">
        <DotAndText>{dotAndText}</DotAndText>
      </div>
      <div className="col-span-4">
        <h5 className="text-2xl">{ctaText}</h5>
      </div>
      <div className="col-span-2 flex justify-end items-start">
        <AnimatedLink
          href="/discover"
          title={label}
          invert
        />
      </div>
    </div>
  )
}
