export default function Hero(){
  return (
    <section id="hero" className="hero text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Heavy Equipment Troubleshooting</h1>
          <p className="mt-3 text-slate-100">Find faults, symptoms, causes and step-by-step repairs for excavators, wheel loaders, bulldozers and forklifts.</p>
          <div className="mt-6 flex gap-3">
            <a href="#faults" className="btn btn-primary">Browse Faults</a>
            <a href="#machines" className="btn btn-ghost">Machines Overview</a>
          </div>
        </div>
        <div className="mt-10 rounded-2xl overflow-hidden shadow-soft border">
          <img src="/assets/images/hero.webp" alt="HeavyFix Hero" className="w-full h-72 md:h-96 object-cover"/>
        </div>
      </div>
    </section>
  )
}