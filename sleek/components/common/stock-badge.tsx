export default function StockBadge() {
  return (
    <div className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2">
      <div className="relative flex h-4 w-4 items-center justify-center">
        {/* Ripple */}
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-40" />

        {/* Dot */}
        <span className="relative h-2.5 w-2.5 rounded-full bg-green-500" />
      </div>

      <span className="text-lg font-medium text-green-600">
        605 in stock
      </span>
    </div>
  )
}