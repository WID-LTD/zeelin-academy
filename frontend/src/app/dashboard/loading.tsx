export default function DashboardLoading() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-4">
      <div className="flex justify-between items-center mb-10">
        <div><div className="h-8 w-64 bg-[color:var(--border)] rounded animate-pulse mb-2" /><div className="h-4 w-40 bg-[color:var(--border)] rounded animate-pulse" /></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        {[1,2,3].map(i => <div key={i} className="p-6 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)]"><div className="w-12 h-12 rounded-xl bg-[color:var(--border)] animate-pulse mb-4" /><div className="h-4 bg-[color:var(--border)] rounded animate-pulse w-24 mb-2" /><div className="h-8 bg-[color:var(--border)] rounded animate-pulse w-12" /></div>)}
      </div>
    </div>
  )
}
