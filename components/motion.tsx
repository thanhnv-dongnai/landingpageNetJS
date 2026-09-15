'use client';
import { motion, type Variants } from 'framer-motion';
export const fadeUp: Variants = { hidden:{ y:30, opacity:0 }, visible:{ y:0, opacity:1, transition:{ duration:.65, ease:'easeOut' } } };
export const stagger: Variants = { hidden:{ opacity:0 }, visible:{ opacity:1, transition:{ staggerChildren:.1 } } };
export const card: Variants = { hidden:{ y:30, opacity:0 }, visible:{ y:0, opacity:1, transition:{ duration:.55 } } };
export const MotionSection = ({ children, className='' }: { children: React.ReactNode; className?: string }) => <motion.section initial="hidden" whileInView="visible" viewport={{ once:true, amount:.15 }} variants={stagger} className={className}>{children}</motion.section>;
