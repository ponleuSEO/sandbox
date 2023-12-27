import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import One from './components/one';
import Two from './components/two';
import ScrollAnimation from './components/scrollAnimation';
import Three from './components/three';
import Four from './components/four';
import Five from './components/five';
import Six from './components/six';
import Seven from './components/seven';
import Eight from './components/eight';
import Link from 'next/link';
import Shop from './payment/shop';
import Ten from './components/ten';
import { Locale } from '@/i18n.config';
import HorizontalScroll from './gsap/HorizontalScroll';
export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <>
      <main className='h-full'>
        {/* <Ten lang={lang} /> */}
        <HorizontalScroll />
      </main>
    </>
  );
}
