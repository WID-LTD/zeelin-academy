const fs = require('fs');
const path = require('path');

const pages = ['support', 'help', 'community', 'privacy', 'terms'];
const baseDir = 'c:/Users/DELL/Downloads/project/zeelin/academy/frontend/src/app';

pages.forEach(page => {
  const dir = path.join(baseDir, page);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), `
export default function ${page.charAt(0).toUpperCase() + page.slice(1)}Page() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-[color:var(--text-core)] mb-6 capitalize">${page}</h1>
      <p className="text-[color:var(--text-secondary)] text-lg">Content for ${page} is currently under construction. Please check back later.</p>
    </div>
  )
}
`);
});

fs.writeFileSync(path.join(baseDir, 'not-found.tsx'), `
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-[color:var(--text-core)] mb-4">404</h1>
      <h2 className="text-2xl font-bold text-[color:var(--text-secondary)] mb-8">Page Not Found</h2>
      <p className="text-lg text-[color:var(--text-muted)] max-w-lg mb-8">The page you are looking for doesn't exist or has been moved.</p>
      <Link href="/" className="btn-gold px-8 py-3 rounded-xl font-bold">Return to Home</Link>
    </div>
  )
}
`);

console.log('Pages created successfully.');
