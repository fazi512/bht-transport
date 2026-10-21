import React, { useState } from 'react';
import Layout from '../components/Layout.jsx';
import cranes from '../data/cranes.json';
import { Link } from 'react-router-dom';

export default function Fleet(){
  const [filter,setFilter]=useState('All');
  const types=['All','All-Terrain','Crawler','Rough-Terrain','Truck-Mounted','Aerial Platform','Telehandler','Forklift','Low Bed & Trailers'];
  const filtered = filter==='All'?cranes:cranes.filter(c=>c.type===filter);
  return (
    <Layout>
      <section className="py-16">
        <div className="mx-auto max-w-[1360px] px-5">
          <h1 className="text-[42px] font-black">OUR FLEET <span className="text-[#FFC200]">30T – 1350T</span></h1>
          <p className="text-white/60 max-w-[600px] mt-3">Database driven from cranes.json – same facilities as BOB Cranes. Add new crane by editing JSON, no code needed.</p>
          <div className="mt-6 flex flex-wrap gap-2">{types.map(t=><button key={t} onClick={()=>setFilter(t)} className={`px-4 h-9 rounded-full text-[12px] font-bold border ${filter===t?'bg-[#FFC200] text-black border-[#FFC200]':'bg-white/5 border-white/10 hover:bg-white/10'}`}>{t}</button>)}</div>
          <div className="mt-8 grid md:grid-cols-3 gap-5">{filtered.map(c=><Link key={c.id} to={`/fleet/${c.id}`} className="reveal rounded-[20px] border border-white/10 bg-[#111] overflow-hidden hover:border-[#FFC200]/30 transition"><img src={`/images/${c.image}`} className="h-48 w-full object-cover"/><div className="p-5"><div className="text-[10px] text-[#FFC200]">{c.type}</div><div className="font-black mt-1">{c.model}</div><div className="text-[12px] text-white/60 mt-1">{c.capacity} • Boom {c.boom}</div><div className="text-[11px] text-white/40 mt-2">Jib: {c.jib}</div><div className="mt-4 h-8 px-4 rounded-full bg-[#FFC200] text-black font-bold text-[11px] inline-flex items-center">VIEW SPECS →</div></div></Link>)}</div>
        </div>
      </section>
    </Layout>
  );
}
