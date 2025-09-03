import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import data from '../data/data.json';
import { useState, useMemo } from 'react';

const badge={Critical:'bg-red-100 text-red-700',High:'bg-orange-100 text-orange-700',Medium:'bg-yellow-100 text-yellow-700',Low:'bg-green-100 text-green-700'};

export default function FaultDetail(){
  const { id } = useParams();
  const current = data.find(d=> String(d.id)===String(id));
  const [search,setSearch]=useState(''); const [machine,setMachine]=useState('All'); const [system,setSystem]=useState('All'); const [severity,setSeverity]=useState('All');
  const filtered = useMemo(()=> data.filter(f=>{
    const q=search.toLowerCase();
    const sMatch = !q || (f.title.toLowerCase().includes(q) || (Array.isArray(f.symptoms)? f.symptoms.join(' ').toLowerCase().includes(q):(f.symptoms||'').toLowerCase().includes(q)) || (Array.isArray(f.causes)? f.causes.join(' ').toLowerCase().includes(q):(f.causes||'').toLowerCase().includes(q)));
    const mMatch = machine==='All'||f.machine===machine; const sysMatch = system==='All'||f.system===system; const sevMatch = severity==='All'||f.severity===severity;
    return sMatch && mMatch && sysMatch && sevMatch;
  }),[search,machine,system,severity]);

  if(!current) return (<div><Navbar/><div className="max-w-7xl mx-auto px-6 py-10"><p>Fault not found.</p><Link to="/" className="text-blue-600 underline">Back home</Link></div></div>);

  return (
    <div>
      <Navbar/>
      <div className="h-64 w-full overflow-hidden">
        <img src={current.image||'/assets/images/hero.webp'} onError={e=>e.currentTarget.src='/assets/images/hero.webp'} alt={current.title} className="w-full h-full object-cover"/>
      </div>
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative">
        <div className="bg-white rounded-2xl shadow-soft p-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{current.title}</h1>
              <p className="text-slate-600 mt-1">{current.machine} • {current.system}</p>
            </div>
            <span className={`badge ${badge[current.severity]||'bg-slate-100 text-slate-700'}`}>{current.severity}</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="md:col-span-2 space-y-6">
              <section>
                <h2 className="font-semibold text-slate-800">Symptoms</h2>
                <ul className="list-disc pl-5 mt-2 text-slate-700">{(Array.isArray(current.symptoms)? current.symptoms : [current.symptoms]).map((s,i)=>(<li key={i}>{s}</li>))}</ul>
              </section>
              <section>
                <h2 className="font-semibold text-slate-800">Likely Causes</h2>
                <ul className="list-disc pl-5 mt-2 text-slate-700">{(Array.isArray(current.causes)? current.causes : [current.causes]).map((c,i)=>(<li key={i}>{c}</li>))}</ul>
              </section>
              <section>
                <h2 className="font-semibold text-slate-800">Repair Steps</h2>
                <ol className="list-decimal pl-5 mt-2 text-slate-700">{(Array.isArray(current.repair)? current.repair : [current.repair]).map((r,i)=>(<li key={i}>{r}</li>))}</ol>
              </section>
            </div>
            <aside className="md:col-span-1">
              <div className="bg-slate-50 rounded-xl p-4 sticky top-24">
                <h3 className="font-semibold mb-2">Quick Jump</h3>
                <div className="h-72 overflow-auto pr-2 space-y-2">
                  {filtered.map(f=>(
                    <a key={f.id} href={'/fault/'+f.id} className="block p-2 rounded hover:bg-white border">
                      <div className="text-sm font-medium">{f.title}</div>
                      <div className="text-xs text-slate-500">{f.machine} • {f.system}</div>
                    </a>
                  ))}
                </div>
              </div>
              <a href="/" className="mt-4 inline-block text-blue-600 underline">← Back to library</a>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}