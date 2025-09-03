export default function Navbar(){
  const go = (id) => { const el = document.getElementById(id); if(el) el.scrollIntoView({behavior:'smooth'}); };
  return (
    <header className="sticky-nav">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/icons/icon-72x72.png" alt="logo" className="w-8 h-8 rounded" />
          <div className="font-extrabold text-lg">HeavyFix <span className="text-slate-400 text-xs align-middle">PWA</span></div>
        </div>
        <nav className="hidden md:flex gap-6 text-slate-700">
          <button className="hover:underline" onClick={()=>go('hero')}>Home</button>
          <button className="hover:underline" onClick={()=>go('faults')}>Faults</button>
          <button className="hover:underline" onClick={()=>go('machines')}>Machines</button>
          <button className="hover:underline" onClick={()=>go('about')}>About</button>
        </nav>
      </div>
    </header>
  )
}