'use client';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import progress from '@/public/gogo-marketing/progress.svg';

import Content from './Content';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function HorizontalScroll() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      let sections = gsap.utils.toArray('#panel');

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '#container-full',
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          // base vertical scrolling on how wide the container is so it feels more natural.
          end: '+=7000',
        },
      });
    });

    return () => ctx.revert(); // <-- CLE
  }, []);
  return (
    <div
      id='container-full'
      className='flex h-screen w-[500vw] bg-gray-900 text-white '
    >
      {/* Map it 5 times */}
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          id='panel'
          className='flex h-full w-screen items-center justify-evenly'
        >
          <Content />
        </div>
      ))}
      <div className='fixed bottom-4 flex w-screen justify-center'>
        <svg
          width='486'
          height='28'
          viewBox='0 0 486 28'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <mask
            id='mask0_1_17'
            style={{ maskType: 'alpha' }}
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='486'
            height='28'
          >
            <rect x='14' y='12' width='458' height='5' fill='#FF8E8E' />
            <circle cx='14' cy='14' r='14' fill='#FF3D3D' />
            <circle cx='243' cy='14' r='14' fill='#FF3D3D' />
            <circle cx='472' cy='14' r='14' fill='#FF3D3D' />
          </mask>
          <g mask='url(#mask0_1_17)'>
            <rect width='486' height='28' fill='#FF6C6C' />
          </g>
        </svg>
      </div>
    </div>
  );
}
