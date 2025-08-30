export default function Navbar(){
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-slate-800">HeavyFix</div>
        <nav className="hidden md:flex gap-6 text-slate-600">
          <a href="/" className="hover:text-slate-900">Home</a>
          <a href="/" className="hover:text-slate-900">Troubleshooting</a>
          <a href="/" className="hover:text-slate-900">Resources</a>
        </nav>
      </div>
    </header>
  );
}