import React, { useState } from 'react';
import data from './data.json';
import SearchBar from './components/SearchBar.jsx';
import FaultList from './components/FaultList.jsx';

export default function App(){ 
  const [query,setQuery] = useState('');
  return (
    <div className="min-h-screen p-6">
      <header className="max-w-6xl mx-auto text-center mb-6">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-2xl p-10 shadow-lg">
          <h1 className="text-4xl font-extrabold">Heavy Equipment Troubleshooting V2</h1>
          <p className="mt-2 text-slate-100">Search faults, symptoms, causes and step-by-step repairs</p>
        </div>
      </header>
      <main className="max-w-6xl mx-auto">
        <SearchBar query={query} setQuery={setQuery} />
        <FaultList faults={data} query={query} />
      </main>
    </div>
  );
}
