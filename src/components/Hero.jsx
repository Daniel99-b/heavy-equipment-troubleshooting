export default function Hero(){
  return (
    <div className="hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Fix heavy equipment faster. <span className="text-emerald-300">Smarter.</span></h1>
        <p className="mt-4 text-slate-100 max-w-2xl">Search faults, read symptoms, identify causes and follow step-by-step repairs for excavators, wheel loaders, bulldozers and forklifts.</p>
        <div className="mt-6 flex gap-3">
          <a href="#library" className="bg-white text-blue-700 px-5 py-3 rounded-xl font-semibold">Start Troubleshooting</a>
          <a href="#" className="border border-white px-5 py-3 rounded-xl">View Categories</a>
        </div>
      </div>
    </div>
  );
}