export default function AdminLoading() {
  return (
    <div className="min-h-screen bg-[color:var(--bg-primary)] flex">
      <aside className="w-64 shrink-0 border-r border-[color:var(--border)] bg-[color:var(--bg-card)] hidden lg:flex flex-col p-4">
        <div className="h-6 w-32 bg-[color:var(--border)] rounded animate-pulse mb-6" />
        {[1,2,3,4,5,6,7].map(i => <div key={i} className="h-10 bg-[color:var(--border)] rounded-xl animate-pulse mb-2" />)}
      </aside>
      <div className="flex-1 p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {[1,2,3,4].map(i => <div key={i} className="p-6 rounded-xl border bg-[color:var(--bg-card)] border-[color:var(--border)]"><div className="h-9 w-16 bg-[color:var(--border)] rounded animate-pulse mb-2" /><div className="h-4 w-24 bg-[color:var(--border)] rounded animate-pulse" /></div>)}
        </div>
      </div>
    </div>
  )
}
