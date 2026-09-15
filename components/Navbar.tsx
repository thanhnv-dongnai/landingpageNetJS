'use client';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [['Giới thiệu','#about'],['Chương trình','#program'],['Cơ sở vật chất','#facilities'],['Cuộc sống','#life'],['Học phí','#tuition'],['FAQ','#faq'],['Hệ thống Á Châu','#system']];
  return <motion.nav initial={{y:-80,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:.6}} className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-cobalt/95 backdrop-blur-xl">
    <div className="container-page flex h-20 items-center justify-between"><a href="https://abcedu.vn" target="_blank" rel="noreferrer"><Image src="/assets/logo.png" alt="Logo Hệ thống Giáo dục Á Châu ABC EDU" width={58} height={58} className="h-[58px] w-[58px] object-contain" /></a>
      <button className="rounded-lg border border-white/20 p-2 lg:hidden" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button>
      <div className={`${open?'flex':'hidden'} absolute left-0 right-0 top-20 flex-col gap-5 border-b border-white/10 bg-cobalt p-5 lg:static lg:flex lg:flex-row lg:items-center lg:border-0 lg:bg-transparent lg:p-0`}>{links.map(([label,href])=><a key={href} href={href} onClick={()=>setOpen(false)} target={href.startsWith('http')?'_blank':undefined} rel={href.startsWith('http')?'noreferrer':undefined} className="text-sm transition duration-300 hover:text-orange">{label}</a>)}<a href="#register" className="rounded-lg bg-orange px-5 py-3 text-center font-bold transition duration-300 hover:scale-[1.04]">Đăng ký</a></div>
    </div></motion.nav>;
}
