'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const schools = [
  ['Trường TH - THCS - THPT Á Châu Long Thành', '/assets/about_school.webp'],
  ['Trường TH - THCS - THPT Song ngữ Á Châu', '/assets/ctdt-02.jpg'],
  ['Hệ thống mầm non ABC Á Châu', '/assets/activities-06.webp'],
];

export default function System() {
  return <section id="system" className="section-space bg-night"><div className="container-page">
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} className="mb-10"><p className="mb-3 text-xs font-bold uppercase tracking-[.24em] text-orange">ABC EDU</p><h2 className="text-4xl font-extrabold sm:text-6xl">Hệ thống <span className="text-orange">Giáo dục Á Châu</span></h2><p className="mt-4 max-w-3xl leading-7 text-white/70">Hệ thống Giáo dục Á Châu (ABC EDU) kiến tạo môi trường học tập toàn diện, kết hợp chương trình giáo dục quốc gia với chương trình quốc tế Cambridge, đồng hành cùng học sinh trên hành trình trở thành công dân toàn cầu.</p></motion.div>
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: .1 } } }} className="grid gap-6 md:grid-cols-3">{schools.map(([title, image]) => <motion.a key={title} href="http://aclt.edu.vn" target="_blank" rel="noreferrer" variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} whileHover={{ y: -6, borderColor: '#DF6B33' }} className="overflow-hidden rounded-2xl border border-white/10 bg-card"><Image src={image} alt={title} width={800} height={500} className="h-48 w-full object-cover"/><h3 className="p-5 text-lg font-bold">{title}</h3></motion.a>)}</motion.div>
  </div></section>;
}
