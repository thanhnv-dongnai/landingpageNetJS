'use client';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { useState } from 'react';

export default function Tuition() {
  const [open, setOpen] = useState(false);
  return <section id="tuition" className="section-space bg-cobaltLight text-night">
    <div className="container-page">
      <h2 className="mb-8 text-4xl font-extrabold sm:text-6xl">Học phí <span className="text-orange">2026-2027</span></h2>
      <div className="grid items-center gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <div><p className="leading-8 text-slate-700">Học phí Trường TH - THCS - THPT Á Châu Long Thành năm học 2026-2027 được công bố minh bạch theo từng cấp học, bao gồm học phí, phí theo tháng, phí bán trú và các khoản thu khác.</p><motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: .97 }} href="http://aclt.edu.vn" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-orange px-5 py-3 font-bold text-white">Xem chi tiết học phí <ExternalLink size={18} /></motion.a></div>
        <button type="button" onClick={() => setOpen(true)} className="overflow-hidden rounded-2xl bg-white text-left shadow-xl" aria-label="Phóng to bảng học phí"><Image src="/assets/bieu-phi.jpg" alt="Học phí Trường Á Châu Long Thành năm học 2026-2027" width={1000} height={650} className="h-72 w-full object-contain bg-white transition duration-300 hover:scale-[1.02]" /></button>
      </div>
    </div>
    <AnimatePresence>{open && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} className="fixed inset-0 z-[70] flex items-center justify-center bg-night/90 p-4"><button type="button" onClick={() => setOpen(false)} className="absolute right-5 top-5 rounded-full bg-orange p-3 text-white" aria-label="Đóng"><X /></button><motion.img initial={{ scale: .9 }} animate={{ scale: 1 }} src="/assets/bieu-phi.jpg" alt="Bảng học phí phóng to" className="max-h-[92vh] max-w-full rounded-xl bg-white object-contain" /></motion.div>}</AnimatePresence>
  </section>;
}
