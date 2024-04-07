export default function CtaSpacer() {
  return (
    <div className="grid grid-cols-2 border-t my-40">
      <div className="flex items-center gap-3">
        <span className="bg-black h-3 w-3 rounded-full" />
        <p>Portfolio</p>
      </div>
      <div className="flex justify-between text-2xl font-medium">
        <h5>We help brands grow and tell their stories to the world.</h5>
        <p className="flex">
          <span className="animate-pulse-fade inline-block">_</span>
          10
        </p>
      </div>
    </div>
  )
}
