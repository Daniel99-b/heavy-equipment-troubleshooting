export default function MachinesOverview(){
  const cards=[
    {title:'Excavator',img:'/assets/images/excavator.webp',desc:'Digging, trenching, lifting & attachments.'},
    {title:'Bulldozer',img:'/assets/images/bulldozer.webp',desc:'Grading, pushing, ripping and site prep.'},
    {title:'Wheel Loader',img:'/assets/images/wheel-loader.webp',desc:'Loading, carrying and stockpile work.'},
    {title:'Forklift',img:'/assets/images/forklift.webp',desc:'Warehouse & yard material handling.'},
  ];
  return (
    <section id="machines" className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-3">Machines Overview</h2>
      <p className="text-slate-600 mb-6">Jump straight to faults by machine. Click a card to filter the library.</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {cards.map(c => (
          <div key={c.title} className="card">
            <div className="h-40 w-full overflow-hidden"><img src={c.img} alt={c.title} className="w-full h-full object-cover"/></div>
            <div className="p-4">
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{c.desc}</p>
              <button
                onClick={()=>{
                  const el=document.getElementById('faults');
                  if(el) el.scrollIntoView({behavior:'smooth'});
                  setTimeout(()=>{
                    const target = document.querySelector(`[data-machine='${c.title}']`);
                    if(target) target.click();
                  },250);
                }}
                className="btn btn-primary mt-3 w-full">View Faults</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}