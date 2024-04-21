export default function DotAndText({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="border-t w-full flex items-center gap-2 pt-2">
      <span className="bg-black rounded-full h-3 w-3"></span>
      {children}
    </div>
  )
}
