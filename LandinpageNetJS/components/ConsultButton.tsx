'use client';
import { useState } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function ConsultButton() {
  const [open, setOpen] = useState(false);
  return <>
    <button type="button" onClick={() => setOpen(true)} className="fixed bottom-5 right-4 z-50 flex items-center gap-2 rounded-full bg-orange px-4 py-3 font-bold text-white shadow-2xl transition duration-300 hover:scale-105" aria-label="Mở tư vấn nhanh"><MessageCircle size={19}/><span className="hidden sm:inline">Tư vấn</span></button>
    <AnimatePresence>{open && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-center justify-center bg-night/80 p-5 backdrop-blur-sm" onClick={() => setOpen(false)}><motion.div initial={{ scale: .95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: .95, y: 20 }} onClick={e => e.stopPropagation()} className="w-full max-w-md rounded-2xl bg-white p-6 text-night shadow-2xl"><div className="flex items-start justify-between"><div><h2 className="text-2xl font-bold">Tư vấn nhanh</h2><p className="mt-1 text-sm text-slate-500">Trường Á Châu Long Thành</p></div><button onClick={() => setOpen(false)} aria-label="Đóng"><X/></button></div><form className="mt-5 space-y-4"><input required placeholder="Họ và tên" className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-orange"/><input required type="tel" placeholder="Số điện thoại" className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-orange"/><button className="w-full rounded-lg bg-orange px-4 py-3 font-bold text-white">Gửi yêu cầu</button></form><a href="tel:02517308668" className="mt-4 flex items-center justify-center gap-2 text-sm text-orange"><Phone size={16}/> 0251 730 8668</a></motion.div></motion.div>}</AnimatePresence>
  </>;
}
