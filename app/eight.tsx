'use client';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
export default function eight() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: '#section1',
        pin: '#pinning',
        start: 'top top',
        end: 'bottom top',
        markers: true,
      });
    });

    let headings = gsap.utils.toArray('.image');
    gsap.set(headings, { yPercent: 300, opacity: 0 });

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
        { yPercent: -200, opacity: 0 },
        '+=1'
      );
    });

    return () => ctx.revert(); // <-- CLE
  }, []);

  return (
    <section id='section1' className='relative h-[500vh] w-full bg-blue-500'>
      <div id='pinning' className='relative h-screen '>
        <div className='image'>
          <Image src={'/1.webp'} alt='' fill></Image>
        </div>
        <div className='image'>
          <Image src={'/2.webp'} alt='' fill></Image>
        </div>
        <div className='image'>
          <Image src={'/1.webp'} alt='' fill></Image>
        </div>
        <div className='image'>
          <Image src={'/2.webp'} alt='' fill></Image>
        </div>
      </div>
    </section>
  );
}
