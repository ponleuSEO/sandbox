import React from 'react';
import mountain from '@/public/phone.png';
import Image from 'next/image';
export default function Six() {
  return (
    <div className='flex flex-col items-center justify-center md:flex-row'>
      <div>
        <p className='text-4xl'>SSpay - 欢迎来到您的盛世</p>
      </div>
      <div className="relative aspect-square h-[400px] before:absolute before:left-1/2 before:top-1/2 before:h-[60%] before:w-[60%] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-red-500 before:blur-3xl before:content-[''] md:h-[600px]">
        <Image fill alt='' src={mountain} sizes='100vw' />
      </div>
    </div>
  );
}
