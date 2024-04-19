interface HeroTextProps {
  header: string
  subheader?: string
}

export default function HeroText(props: HeroTextProps) {
  const { header, subheader } = props
  return (
    <div className="p-4 grid gap-4">
      <h1 className="text-6xl xl:text-9xl tracking-tighter">{header}</h1>
      {subheader && (
        <p className="flex items-start relative">
          <span className="w-3 h-3 bg-black rounded-full absolute left-0 top-[5px]" />
          <span className="pl-5">{subheader}</span>
        </p>
      )}
    </div>
  )
}
