import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import cranes from '../data/cranes.json';

export default function FleetDetail(){
  const {id}=useParams();
  const crane=cranes.find(c=>c.id===id);
  if(!crane) return <Layout><div className="p-20">Not found</div></Layout>;
  return (
    <Layout>
      <section className="py-16">
        <div className="mx-auto max-w-[1360px] px-5 grid lg:grid-cols-2 gap-10">
          <div><img src={`/images/${crane.image}`} className="w-full h-[500px] object-cover rounded-[24px] border border-white/10"/><div className="mt-4 grid grid-cols-3 gap-3"><div className="rounded-2xl bg-[#111] border border-white/10 p-4"><div className="text-[10px] text-white/40">CAPACITY</div><div className="font-black">{crane.capacity}</div></div><div className="rounded-2xl bg-[#111] border border-white/10 p-4"><div className="text-[10px] text-white/40">BOOM</div><div className="font-black">{crane.boom}</div></div><div className="rounded-2xl bg-[#FFC200] p-4 text-black"><div className="text-[10px]">TYPE</div><div className="font-black">{crane.type}</div></div></div></div>
          <div><Link to="/fleet" className="text-[11px] tracking-widest text-white/40">← BACK TO FLEET</Link><h1 className="mt-4 text-[36px] font-black leading-[0.9]">{crane.model}</h1><div className="mt-2 text-[#FFC200] font-bold">{crane.capacity} • {crane.type}</div><div className="mt-6 space-y-4 text-[13px] leading-6 text-white/70"><p>Same specifications as BOB Cranes fleet. Well-maintained, certified, ready to mobilize across UAE.</p><div className="rounded-2xl bg-[#111] border border-white/10 p-5"><div className="text-[12px] font-bold">SPECIFICATIONS</div><div className="mt-3 space-y-2 text-[12px]"><div className="flex justify-between"><span className="text-white/40">Capacity</span><span className="font-bold">{crane.capacity}</span></div><div className="flex justify-between"><span className="text-white/40">Main Boom</span><span className="font-bold">{crane.boom}</span></div><div className="flex justify-between"><span className="text-white/40">Jib / Luffing</span><span className="font-bold">{crane.jib}</span></div><div className="flex justify-between"><span className="text-white/40">Type</span><span className="font-bold">{crane.type}</span></div></div></div></div><div className="mt-6 flex gap-3"><a href="https://wa.me/971589376771" target="_blank" className="h-12 px-6 rounded-full bg-[#25D366] text-white font-black text-[13px] inline-flex items-center">WhatsApp Enquiry</a><a href="tel:0589376771" className="h-12 px-6 rounded-full bg-[#FFC200] text-black font-black text-[13px] inline-flex items-center">Call 058 937 6771</a></div></div>
        </div>
      </section>
    </Layout>
  );
}
