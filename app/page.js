'use client'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import QuickLinks from './catalog';
import FeaturedProducts from './FeaturedProducts';
import CoupleStories from './CoupleStories';
import { MoveRight } from 'lucide-react';

export default function Home() {

  const contentRef = useRef(null);
  // Refs for the animated and static borders
  const exploreBtnRef = useRef(null);
  const borderAnimRef = useRef(null);
  const staticBorderRef = useRef(null);

  // Animation durations and colors (easy to tweak)
  const animatedBorderColor = '#e6d3c7';
  const animateInDuration = 1.5;
  const animateOutDuration = 1.5;
  const staticFadeInDuration = 1.3;
  const staticFadeOutDuration = 0.3;
  const staticFadeInDelay = 0.2;

  // Animate border in (on hover)
  const handleBorderHoverIn = () => {
    // Fade out the static (white) border
    gsap.to(staticBorderRef.current, {
      opacity: 0,
      duration: staticFadeOutDuration,
      ease: 'power2.out',
    });
    // Animate in the colored border from left to right
    gsap.to(borderAnimRef.current, {
      width: '100%',
      opacity: 1,
      backgroundColor: animatedBorderColor,
      duration: animateInDuration,
      ease: 'power2.out',
    });
  };

  // Animate border out (on mouse leave)
  const handleBorderHoverOut = () => {
    gsap.to(borderAnimRef.current, {
      width: '0%',
      opacity: 0,
      backgroundColor: animatedBorderColor,
      duration: animateOutDuration,
      ease: 'power2.in',
    });
    // Fade the static (white) border back in
    gsap.to(staticBorderRef.current, {
      opacity: 1,
      duration: staticFadeInDuration,
      delay: staticFadeInDelay,
      ease: 'power2.in',
    });
  };

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
    <div>
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className='absolute inset-0 w-full h-full object-cover'>
          <source src="/hero-video.mp4" type="video/mp4" />
          Your Browser does not support the video tag.
        </video>

        <div
          ref={contentRef}
          className='absolute bottom-10 right-10 z-10 text-white text-right'
        >
          <p className='text-4xl italic'>Where modern love meets timeless tradition — explore wedding fashion  <br />designed for couples who vow to stand out together.</p>
          <button
            ref={exploreBtnRef}
            className="relative cursor-pointer text-4xl italic inline-flex items-center gap-2 pb-1 overflow-hidden group"
            onMouseEnter={handleBorderHoverIn}
            onMouseLeave={handleBorderHoverOut}
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Collections
              <MoveRight />
            </span>
            {/* Static border (initial, white) */}
            <span
              ref={staticBorderRef}
              className="absolute left-0 bottom-0 h-0.5 w-full bg-white animated-border"
              style={{ opacity: 1, transition: 'none' }}
            />
            {/* Animated border overlay (color) */}
            <span
              ref={borderAnimRef}
              className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#e6d3c7] animated-border"
              style={{ opacity: 0, transition: 'none' }}
            />
          </button>
        </div>
      </section>
      <QuickLinks />
      <FeaturedProducts />
      <CoupleStories />
    </div>
  );
}
