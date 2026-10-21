import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, MessageCircle } from 'lucide-react';

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();
  useEffect(()=>{
    const onScroll=()=>{ setScrolled(window.scrollY>20); document.getElementById('progress') && (document.getElementById('progress').style.width = (window.scrollY/(document.documentElement.scrollHeight-innerHeight)*100)+'%'); };
    window.addEventListener('scroll', onScroll, {passive:true});
    const io=new IntersectionObserver((es)=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('in-view')),{threshold:.15});
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
    return ()=>{ window.removeEventListener('scroll',onScroll); io.disconnect(); };
  },[loc]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <div id="progress" className="fixed top-0 left-0 h-[3px] bg-[#FFC200] z-[100] w-0"></div>
      <div className="bg-black text-white/60 text-[10px] tracking-widest border-b border-white/10"><div className="mx-auto max-w-[1360px] px-5 h-8 flex justify-between items-center"><div className="hidden md:flex gap-4">DUBAI • ABU DHABI • SHARJAH • OMAN • KSA | QHSE CERTIFIED</div><div className="ml-auto flex gap-3"><a href="tel:0589376771">058 937 6771</a>•<a href="tel:0551102426">055 110 2426</a></div></div></div>
      <header className={`sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 transition-all ${scrolled?'bg-[#0a0a0a]/95 shadow-lg':'bg-[#0a0a0a]/80'}`}>
        <div className="mx-auto max-w-[1360px] px-5 h-[72px] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3"><div className="w-11 h-11 bg-[#FFC200] rounded-xl grid place-items-center font-black text-black">BHT</div><div className="leading-none"><div className="font-black text-[13px]">BILAL HAFEEZ</div><div className="text-[10px] tracking-[0.2em] text-[#FFC200]">TRANSPORT LLC</div></div></Link>
          <nav className="hidden lg:flex gap-1 bg-white/[0.04] rounded-full p-1 border border-white/10">
            <Link to="/" className={`px-4 h-8 rounded-full grid place-items-center text-[12px] font-bold ${loc.pathname==='/'?'bg-white text-black':'hover:bg-white/10'}`}>HOME</Link>
            <Link to="/fleet" className={`px-4 h-8 rounded-full grid place-items-center text-[12px] ${loc.pathname.startsWith('/fleet')?'bg-white text-black font-bold':'hover:bg-white/10'}`}>FLEET</Link>
            <Link to="/services" className={`px-4 h-8 rounded-full grid place-items-center text-[12px] ${loc.pathname==='/services'?'bg-white text-black font-bold':'hover:bg-white/10'}`}>SERVICES</Link>
            <a href="/#contact" className="px-4 h-8 rounded-full hover:bg-white/10 grid place-items-center text-[12px]">CONTACT</a>
          </nav>
          <div className="flex gap-2 items-center"><a href="tel:0589376771" className="hidden md:inline-flex h-10 px-5 rounded-full border border-white/15 text-[12px] font-bold items-center">📞 058 937 6771</a><a href="https://wa.me/971589376771" target="_blank" className="h-10 px-5 rounded-full bg-[#FFC200] text-black font-black text-[12px] inline-flex items-center">GET QUOTE →</a><button onClick={()=>setOpen(true)} className="lg:hidden w-10 h-10 rounded-full bg-white/10 grid place-items-center"><Menu className="w-5 h-5"/></button></div>
        </div>
        {open && <div className="lg:hidden fixed inset-0 bg-black/95 z-50 p-6 flex flex-col"><div className="flex justify-between"><div className="font-black">MENU</div><button onClick={()=>setOpen(false)} className="w-10 h-10 rounded-full bg-white/10 grid place-items-center"><X className="w-5 h-5"/></button></div><div className="mt-10 space-y-6 text-2xl font-bold"><Link to="/" onClick={()=>setOpen(false)}>HOME</Link><Link to="/fleet" onClick={()=>setOpen(false)}>FLEET</Link><Link to="/services" onClick={()=>setOpen(false)}>SERVICES</Link></div></div>}
      </header>
      {children}
      <footer className="bg-[#0a0a0a] border-t border-white/10 pt-16 pb-28 lg:pb-12"><div className="mx-auto max-w-[1360px] px-5 grid md:grid-cols-4 gap-10"><div><div className="flex gap-3 items-center"><div className="w-11 h-11 bg-[#FFC200] rounded-xl grid place-items-center font-black text-black">BHT</div><div><div className="font-black text-[13px]">BILAL HAFEEZ</div><div className="text-[10px] text-[#FFC200]">TRANSPORT LLC</div></div></div><p className="mt-4 text-[12px] text-zinc-400">Heavy equipment rental UAE – Owner Muhammad Hafeez – 058 937 6771 – Dubai Industrial City</p></div><div><div className="text-[11px] text-white/40">FLEET</div><ul className="mt-3 text-[12px] text-zinc-400 space-y-1"><li>1200T LTM 11200</li><li>1350T LR 11350</li><li>All-Terrain & Crawler</li></ul></div><div><div className="text-[11px] text-white/40">LOCATIONS</div><ul className="mt-3 text-[12px] text-zinc-400 space-y-1"><li>Dubai DIC</li><li>Abu Dhabi</li><li>Sharjah</li></ul></div><div><div className="text-[11px] text-white/40">CONTACT</div><div className="mt-3 text-[12px] text-zinc-400">info@bilalhafeeztransport.ae<br/>058 937 6771<br/>055 110 2426</div></div></div></footer>
      <div className="fixed bottom-[88px] md:bottom-5 right-5 z-50 flex flex-col gap-3"><a href="https://wa.me/971589376771" target="_blank" className="w-12 h-12 rounded-full bg-[#25D366] grid place-items-center"><MessageCircle className="w-6 h-6 text-white"/></a><a href="tel:0589376771" className="w-12 h-12 rounded-full bg-[#FFC200] grid place-items-center"><Phone className="w-5 h-5 text-black"/></a></div>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex gap-2 md:hidden z-50"><a href="tel:0589376771" className="flex-1 h-12 rounded-full bg-black text-[#FFC200] font-black grid place-items-center text-[13px]">CALL</a><a href="https://wa.me/971589376771" className="flex-1 h-12 rounded-full bg-[#25D366] text-white font-black grid place-items-center text-[13px]">WhatsApp</a></div>
    </div>
  );
}
