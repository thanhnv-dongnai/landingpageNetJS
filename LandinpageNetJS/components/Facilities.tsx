'use client';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';

const facilities = [
  ['Phòng học thông minh', '/assets/csvc-01.webp', 'Không gian học tập hiện đại, sáng tạo và giàu cảm hứng.'],
  ['Thư viện đa phương tiện', '/assets/csvc-02.webp', 'Kho tri thức phong phú dành cho hành trình khám phá.'],
  ['Phòng thí nghiệm', '/assets/csvc-04.webp', 'Khơi dậy tinh thần khám phá khoa học.'],
  ['Sân thể thao', '/assets/csvc-05.webp', 'Phát triển thể chất và tinh thần đồng đội.'],
  ['Phòng năng khiếu', '/assets/csvc-03.webp', 'Nuôi dưỡng tài năng nghệ thuật và sáng tạo.'],
];
const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function Facilities() {
  const controls = useAnimation();
  const [paused, setPaused] = useState(false);
  const start = () => controls.start({ x: ['0%', '-50%'], transition: { duration: 22, ease: 'linear', repeat: Infinity } });
  return <section id="facilities" className="section-space overflow-hidden bg-cobaltLight text-night"><div className="container-page">
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} className="mb-10"><p className="mb-3 text-xs font-bold uppercase tracking-[.24em] text-orange">Cơ sở vật chất</p><h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl">Không gian <span className="text-orange">truyền cảm hứng</span></h2></motion.div>
    <div className="overflow-hidden" onMouseEnter={() => { setPaused(true); controls.stop(); }} onMouseLeave={() => { setPaused(false); start(); }}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: .1 } } }} animate={controls} onViewportEnter={start} className="flex w-max gap-4 pb-5">
        {[...facilities, ...facilities].map(([title, image, description], index) => <motion.article key={`${title}-${index}`} variants={item} whileHover={{ y: -6, borderColor: '#DF6B33' }} transition={{ duration: .3 }} className="w-[calc(100vw-2.5rem)] shrink-0 overflow-hidden rounded-2xl border border-white bg-white p-4 shadow-lg md:w-[calc(50vw-2rem)] lg:w-[calc(33.333vw-2rem)]"><Image src={image} alt={title} width={800} height={520} className="h-60 w-full rounded-xl object-cover"/><h3 className="mt-5 text-xl font-bold text-[#c79528]">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-700">{description}</p></motion.article>)}
      </motion.div>
    </div>
    <p className="mt-2 text-xs text-slate-500">{paused ? 'Đang tạm dừng — di chuột ra để tiếp tục' : 'Di chuột vào hình để phóng to và tạm dừng'}</p>
  </div></section>;
}
