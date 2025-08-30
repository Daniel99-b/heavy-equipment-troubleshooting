import { useState } from 'react';
export default function Tabs({data, onSelect}){
  const machines = ['All', 'Excavator','Bulldozer','Wheel Loader','Forklift'];
  const [tab,setTab] = useState('All');
  const list = (tab==='All')? data : data.filter(d=>d.machine===tab);
  return (<div id="faults" className="mt-6"><div className="max-w-6xl mx-auto px-6"><div className="flex gap-3 mb-4">{machines.map(m=>(<button key={m} onClick={()=>setTab(m)} className={`px-4 py-2 rounded-xl ${tab===m?'bg-blue-600 text-white':'bg-white border'}`}>{m}</button>))}</div><div><div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>{list.map(item=>(<div key={item.id} onClick={()=>onSelect(item)}>{/* placeholder - actual card used externally */}</div>))}</div></div></div></div>);}