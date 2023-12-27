'use client';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
export default function Eight() {
  useEffect(() => {
    const isDesktop = window.innerWidth > 768;
    if (isDesktop) {
      gsap.registerPlugin(ScrollTrigger);
      let ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: '#section1',
          pin: '#pinning',
          start: 'top top',
          end: 'bottom bottom', 
        });
      });

      let headings: HTMLDivElement[] = gsap.utils.toArray('.image');
      gsap.set(headings, { yPercent: 100, opacity: 0 });

      headings.forEach((heading, i) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: '#section1',
            start: () => `top+=${i * window.innerHeight} top`,
            end: () => `top+=${(i + 1) * window.innerHeight} top`,
            markers: true,
            scrub: true,
          },
        });
        tl.to(heading, { yPercent: 0, opacity: 1 }).to(
          heading,
          { yPercent: -100, opacity: 0 },
          '+=1'
        );
      });

      return () => ctx.revert(); // <-- CLE
    }
  }, []);

  return (
    <section id='section1' className='h-full w-full lg:h-[500vh]'>
      <div
        id='pinning'
        className='block h-full bg-yellow-100 lg:flex lg:h-screen lg:flex-row lg:bg-casino'
      >
        {[1, 2, 1, 2].map((data, index) => {
          return (
            <div key={index} className='image'>
              <div className='relative aspect-square w-[300px] lg:w-[800px]'>
                <Image src={`/${data}.webp`} alt='' fill></Image>
              </div>
              <p className=' text-5xl text-blue-500'>Section {index + 1}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
