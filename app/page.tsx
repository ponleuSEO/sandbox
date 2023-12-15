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
import Crypto from './crypto';

export default function Home() {
  return (
    <>
      <main className='h-full'>
        {/* <div className='h-screen bg-red-500 text-5xl'>Hello</div>
        <Eight />
        <div className='h-screen bg-red-500 text-5xl'>Hello</div> */}
        <Crypto />
      </main>
    </>
  );
}
