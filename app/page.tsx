import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import One from './one';
import Two from './two';
import ScrollAnimation from './scrollAnimation';
import Three from './three';
import Four from './four';
import Five from './five';
import Six from './six';
import Seven from './seven';
import Eight from './component/Sidebar';

export default function Home() {
  // useEffect(() => {
  //   const observer = new IntersectionObserver(([entry]) => {
  //     if (entry.isIntersecting) {
  //       const div = document.createElement('div');
  //       div.innerHTML = 'Hello, World!';
  //       if (sectionRef.current) {
  //         const section = sectionRef.current.querySelector('.dont-1');
  //         console.log('Hello world');
  //         section?.appendChild(div);
  //         observer.unobserve(sectionRef.current);
  //       }
  //     }
  //   });

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   return () => {
  //     if (sectionRef.current) {
  //       observer.unobserve(sectionRef.current);
  //     }
  //   };
  // }, []);

  return (
    <>
      <main className='bg-white'>
        <Eight></Eight>
      </main>
    </>
  );
}
