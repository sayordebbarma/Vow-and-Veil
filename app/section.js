'use client'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Section() {

  const contentRef = useRef(null);

  useEffect(() => {
    gsap.from(contentRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.8,
      ease: 'power2.out',
      delay: 0.3,
    })
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        ref={contentRef}
        className='absolute bottom-10 right-10 z-10 text-white text-right'
      >
        <p className='text-4xl italic'>Where modern love meets timeless tradition — explore wedding fashion  <br />designed for couples who vow to stand out together.</p>
        <button className='text-4xl italic underline'>Explore Collections</button>
      </div>
    </section>
  );
}
