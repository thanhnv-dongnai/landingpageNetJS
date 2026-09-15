'use client';
import { useEffect, useState } from 'react'; import { ArrowUp } from 'lucide-react';
export default function ScrollTop(){const [show,setShow]=useState(false);useEffect(()=>{const fn=()=>setShow(scrollY>500);addEventListener('scroll',fn);return()=>removeEventListener('scroll',fn)},[]);return show?<button onClick={()=>scrollTo({top:0,behavior:'smooth'})} className="fixed bottom-6 right-5 z-40 rounded-full bg-orange p-3 text-white shadow-xl" aria-label="Về đầu trang"><ArrowUp/></button>:null}
