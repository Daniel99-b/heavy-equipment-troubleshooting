import { useMemo, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import Filters from '../components/Filters.jsx';
import FaultGrid from '../components/FaultGrid.jsx';
import data from '../data.json';

export default function Home(){
  const [search,setSearch] = useState('');
  const [machine,setMachine] = useState('');
  const [system,setSystem] = useState('');
  const [severity,setSeverity] = useState('');

  const filtered = useMemo(()=>{
    return data.filter(f=>{
      const q = search.toLowerCase();
      const matchesSearch = !q || (f.title.toLowerCase().includes(q) || (Array.isArray(f.symptoms)? f.symptoms.join(' ').toLowerCase().includes(q) : (f.symptoms||'').toLowerCase().includes(q)) || (Array.isArray(f.causes)? f.causes.join(' ').toLowerCase().includes(q) : (f.causes||'').toLowerCase().includes(q)));
      const matchesMachine = !machine || f.machine===machine;
      const matchesSystem = !system || f.system===system;
      const matchesSeverity = !severity || f.severity===severity;
      return matchesSearch && matchesMachine && matchesSystem && matchesSeverity;
    });
  },[search,machine,system,severity]);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="px-6">
        <div className="max-w-7xl mx-auto -mt-10">
          <Filters search={search} setSearch={setSearch} machine={machine} setMachine={setMachine} system={system} setSystem={setSystem} severity={severity} setSeverity={setSeverity} />
        </div>
        <section id="library" className="max-w-7xl mx-auto py-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Troubleshooting Library</h2>
            <div className="text-sm text-slate-500">Results: <span className="font-semibold">{filtered.length}</span></div>
          </div>
          <FaultGrid items={filtered} />
        </section>
      </div>
      <footer className="mt-12 border-t bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-slate-600">© {new Date().getFullYear()} HeavyFix — Troubleshooting guides. Contact: info@example.com</div>
      </footer>
    </div>
  );
}