export default function SkeletonCard() {
  return (
    <div className="rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 animate-pulse">
      <div className="h-48 bg-slate-200 dark:bg-slate-700" />
      <div className="p-5 space-y-3">
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4" />
        <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-full" />
        <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-5/6" />
        <div className="flex gap-2 pt-1">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-5 w-14 bg-slate-200 dark:bg-slate-700 rounded-full" />
          ))}
        </div>
      </div>
    </div>
  )
}
