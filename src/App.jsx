import React, { useMemo, useState } from "react";
import data from "./data.json";
import MachineMenu from "./components/MachineMenu.jsx";
import FaultList from "./components/FaultList.jsx";
import SearchBar from "./components/SearchBar.jsx";

export default function App(){
  const [query, setQuery] = useState("");
  const [machine, setMachine] = useState("All");
  const [system, setSystem] = useState("All");

  const machines = useMemo(()=>["All", ...Array.from(new Set(data.map(d=>d.machine)))], []);
  const systems = useMemo(()=>["All", ...Array.from(new Set(data.map(d=>d.system)))], []);

  const filtered = useMemo(()=>{
    let items = data.slice();
    if(machine !== "All") items = items.filter(i=> i.machine === machine);
    if(system !== "All") items = items.filter(i=> i.system === system);
    if(query.trim() !== ""){
      const q = query.toLowerCase();
      items = items.filter(i=> (i.fault + ' ' + i.symptoms + ' ' + i.cause + ' ' + i.repair + ' ' + i.prevention).toLowerCase().includes(q));
    }
    return items;
  }, [machine, system, query]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Heavy Equipment Troubleshooting Guide</h1>
      <div className="mb-4 flex justify-center gap-4">
        <SearchBar value={query} onChange={setQuery} />
        <div>
          <select value={machine} onChange={e=>setMachine(e.target.value)} className="p-2 border rounded">
            {machines.map(m=> <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
        <div>
          <select value={system} onChange={e=>setSystem(e.target.value)} className="p-2 border rounded">
            {systems.map(s=> <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <FaultList items={filtered} />
    </div>
  );
}