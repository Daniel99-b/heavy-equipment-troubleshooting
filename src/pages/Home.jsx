import { useMemo, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import FaultGrid from '../components/FaultGrid.jsx';
import MachinesOverview from '../components/MachinesOverview.jsx';
import Footer from '../components/Footer.jsx';
import data from '../data/data.json';

export default function Home(){
  const [search,setSearch]=useState('');
  const [tab,setTab]=useState('All');
  const [system,setSystem]=useState('All');
  const [severity,setSeverity]=useState('All');
  const [machineFilter,setMachineFilter]=useState('All');

  const filtered = useMemo(()=> data.filter(f=>{
    const q = search.toLowerCase();
    const matchesSearch = !q || (f.title.toLowerCase().includes(q)
      || (Array.isArray(f.symptoms)? f.symptoms.join(' ').toLowerCase().includes(q) : (f.symptoms||'').toLowerCase().includes(q))
      || (Array.isArray(f.causes)? f.causes.join(' ').toLowerCase().includes(q) : (f.causes||'').toLowerCase().includes(q)));
    const matchesTab = tab==='All' ? true : f.machine===tab;
    const matchesSystem = system==='All' ? true : f.system===system;
    const matchesSeverity = severity==='All' ? true : f.severity===severity;
    const matchesMachine = machineFilter==='All' ? true : f.machine===machineFilter;
    return matchesSearch && matchesTab && matchesSystem && matchesSeverity && matchesMachine;
  }),[search,tab,system,severity,machineFilter]);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <section className="max-w-7xl mx-auto -mt-10 px-6">
        <div className="bg-white rounded-2xl p-4 md:p-6 card">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            <input className="md:col-span-6 p-3 border rounded-xl" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search faults, symptoms or causes..."/>
            <select value={machineFilter} onChange={e=>setMachineFilter(e.target.value)} className="md:col-span-2 p-3 border rounded-xl">
              <option>All</option><option>Excavator</option><option>Wheel Loader</option><option>Bulldozer</option><option>Forklift</option>
            </select>
            <select value={system} onChange={e=>setSystem(e.target.value)} className="md:col-span-2 p-3 border rounded-xl">
              <option>All</option><option>Engine</option><option>Hydraulic</option><option>Electrical</option><option>Transmission</option><option>Cooling</option><option>Fuel</option><option>Braking</option><option>Undercarriage</option><option>Mast/Lift</option><option>Drive</option>
            </select>
            <select value={severity} onChange={e=>setSeverity(e.target.value)} className="md:col-span-2 p-3 border rounded-xl">
              <option>All</option><option>Critical</option><option>High</option><option>Medium</option><option>Low</option>
            </select>
          </div>
        </div>
      </section>

      <section id="faults" className="max-w-7xl mx-auto px-6 mt-6">
        <div className="flex flex-wrap gap-3 mb-4">
          {['All','Excavator','Bulldozer','Wheel Loader','Forklift'].map(m => (
            <button key={m} data-machine={m} onClick={()=>setTab(m)} className={`px-4 py-2 rounded-xl ${tab===m?'bg-blue-600 text-white':'bg-white border'}`}>{m}</button>
          ))}
        </div>
        <div className="mb-4 text-slate-600 text-sm">Showing <strong>{filtered.length}</strong> results</div>
        <FaultGrid items={filtered}/>
      </section>

      <MachinesOverview/>
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="card p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-2">All Machine Info</h2>
          <p className="text-slate-600 mb-4">A single section that links to every major system across Excavators, Bulldozers, Wheel Loaders and Forklifts.</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            {['Engine','Hydraulic','Electrical','Transmission','Cooling','Fuel','Braking','Undercarriage','Mast/Lift','Drive'].map(sys=>(
              <a key={sys} href="#faults" className="btn btn-ghost w-full">{sys}</a>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}