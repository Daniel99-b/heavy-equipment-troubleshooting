import { Link } from 'react-router-dom';
const badgeStyles = { Critical: 'bg-red-100 text-red-700', High: 'bg-orange-100 text-orange-700', Medium: 'bg-yellow-100 text-yellow-700', Low: 'bg-green-100 text-green-700' };
export default function FaultCard({fault}){
  return (
    <Link to={`/fault/${fault.id}`} className="card overflow-hidden block">
      <div className="h-44 bg-slate-100 overflow-hidden">
        <img src={fault.image || '/assets/images/hero.webp'} alt={fault.title} onError={(e)=>{e.currentTarget.src='/assets/images/hero.webp';}} className="w-full h-full object-cover"/>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold">{fault.title}</h3>
          <span className={`badge ${badgeStyles[fault.severity] || 'bg-slate-100 text-slate-700'}`}>{fault.severity}</span>
        </div>
        <p className="text-sm text-slate-600 mt-1">{fault.machine} • {fault.system}</p>
        <p className="text-sm text-slate-700 line-clamp-2 mt-2">{Array.isArray(fault.symptoms)? fault.symptoms.join('; ') : fault.symptoms}</p>
      </div>
    </Link>
  );
}