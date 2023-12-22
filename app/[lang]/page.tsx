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
import Eight from './eight';
import Link from 'next/link';
import Shop from './payment/shop';
import Ten from './ten';
import { Locale } from '@/i18n.config';
export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <>
      <main className='h-full'>
        <Ten lang={lang} />
      </main>
    </>
  );
}
