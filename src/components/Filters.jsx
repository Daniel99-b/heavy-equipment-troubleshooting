export default function Filters({search,setSearch,machine,setMachine,system,setSystem,severity,setSeverity}){
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6 -mt-8 relative z-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search by fault, symptom or cause..." className="md:col-span-5 p-3 border rounded-xl outline-none" />
        <select value={machine} onChange={e=>setMachine(e.target.value)} className="md:col-span-2 p-3 border rounded-xl">
          <option value="">All Machines</option>
          <option>Excavator</option>
          <option>Wheel Loader</option>
          <option>Bulldozer</option>
          <option>Forklift</option>
        </select>
        <select value={system} onChange={e=>setSystem(e.target.value)} className="md:col-span-2 p-3 border rounded-xl">
          <option value="">All Systems</option>
          <option>Engine</option>
          <option>Hydraulic</option>
          <option>Electrical</option>
          <option>Transmission</option>
          <option>Cooling</option>
          <option>Fuel</option>
          <option>Brake</option>
          <option>Undercarriage</option>
          <option>Mast/Lift</option>
          <option>Tires</option>
          <option>Travel</option>
          <option>Attachments</option>
          <option>Battery</option>
          <option>Drive</option>
        </select>
        <select value={severity} onChange={e=>setSeverity(e.target.value)} className="md:col-span-2 p-3 border rounded-xl">
          <option value="">All Severity</option>
          <option>Critical</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <div className="md:col-span-1 flex items-center">
          <button onClick={()=>{setSearch('');setMachine('');setSystem('');setSeverity('')}} className="text-sm text-blue-600 underline">Reset</button>
        </div>
      </div>
    </div>
  );
}