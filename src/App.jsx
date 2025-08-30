import React, {useState} from 'react';
import data from './data.json';
import SearchBar from './components/SearchBar.jsx';
import CategoryCards from './components/CategoryCards.jsx';
import FaultGrid from './components/FaultGrid.jsx';

export default function App(){
  const [query,setQuery]=useState('');
  const [filterMachine,setFilterMachine]=useState('All');
  const [filterSystem,setFilterSystem]=useState('All');

  const filtered = data.filter(d=>{
    if(filterMachine!=='All' && d.machine!==filterMachine) return false;
    if(filterSystem!=='All' && d.system!==filterSystem) return false;
    if(query && !(d.fault+ ' ' + d.symptoms + ' ' + d.cause).toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });

  const machines = ['All', ...Array.from(new Set(data.map(d=>d.machine)))];
  const systems = ['All', ...Array.from(new Set(data.map(d=>d.system)))];

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="header-hero text-white py-16 mb-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <div className="text-2xl font-bold">HeavyFix</div>
            <nav className="space-x-6 hidden md:block">
              <a className="hover:underline">Troubleshoot</a>
              <a className="hover:underline">Resources</a>
              <a className="hover:underline">About</a>
            </nav>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Fix heavy equipment faster. <span className="text-emerald-300">Smarter.</span></h1>
              <p className="mt-4 text-slate-100 max-w-xl">Search faults, view symptoms, causes and step-by-step repairs for wheel loaders, bulldozers, excavators and forklifts.</p>
              <div className="mt-6 flex gap-4">
                <button className="px-6 py-3 bg-white text-indigo-700 rounded-xl font-semibold shadow">Start Troubleshooting</button>
                <button className="px-6 py-3 border border-white rounded-xl text-white">Download Checklist</button>
              </div>
            </div>
            <div className="hidden md:block">
              <img src="/assets/images/hero-bg.svg" alt="hero" className="rounded-2xl shadow-lg"/>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-2xl p-6 card-shadow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="md:col-span-1">
                <SearchBar query={query} setQuery={setQuery} />
              </div>
              <div className="flex gap-3 items-center">
                <select value={filterMachine} onChange={e=>setFilterMachine(e.target.value)} className="p-3 border rounded-xl w-full">
                  {machines.map(m=> <option key={m} value={m}>{m}</option>)}
                </select>
                <select value={filterSystem} onChange={e=>setFilterSystem(e.target.value)} className="p-3 border rounded-xl w-full">
                  {systems.map(s=> <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="text-right hidden md:block"><div className="text-sm text-slate-500">Results</div><div className="text-2xl font-bold">{filtered.length}</div></div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        <CategoryCards />
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Troubleshooting Library</h2>
          <FaultGrid items={filtered} />
        </section>
      </main>

      <footer className="mt-12 border-t bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-slate-600">© HeavyFix — Troubleshooting guides. Contact: info@example.com</div>
      </footer>
    </div>
  );
}
