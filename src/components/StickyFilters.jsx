export default function StickyFilters({search,setSearch,machine,setMachine,system,setSystem,severity,setSeverity}){
  return (
    <div className="bg-white/90 backdrop-blur border rounded-xl p-3 shadow-sm sticky top-0 z-20">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Quick search..." className="p-2 border rounded-lg col-span-2 md:col-span-2"/>
        <select value={machine} onChange={e=>setMachine(e.target.value)} className="p-2 border rounded-lg">
          <option value="">All Machines</option><option>Excavator</option><option>Wheel Loader</option><option>Bulldozer</option><option>Forklift</option>
        </select>
        <select value={system} onChange={e=>setSystem(e.target.value)} className="p-2 border rounded-lg">
          <option value="">All Systems</option><option>Engine</option><option>Hydraulic</option><option>Electrical</option><option>Transmission</option><option>Cooling</option><option>Fuel</option><option>Brake</option><option>Undercarriage</option><option>Mast/Lift</option><option>Tires</option><option>Travel</option><option>Attachments</option><option>Battery</option><option>Drive</option>
        </select>
        <select value={severity} onChange={e=>setSeverity(e.target.value)} className="p-2 border rounded-lg">
          <option value="">All Severity</option><option>Critical</option><option>High</option><option>Medium</option><option>Low</option>
        </select>
      </div>
    </div>
  );
}