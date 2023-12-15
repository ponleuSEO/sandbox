import Image from 'next/image';
import React from 'react';
import bg2 from '../public/bg2.png';

export default function Nine() {
  return (
    <div className='flex h-screen w-full items-center justify-center px-8 md:px-24'>
      <div className='flex w-[100%] flex-col items-center justify-center gap-10 bg-purple-800 p-4 md:flex-row md:p-10'>
        <div className='relative aspect-video w-full lg:min-w-[500px]'>
          <Image
            src={bg2}
            alt=''
            fill
            placeholder='blur'
            sizes={'(max-width: 768px) 100vw, 50vw'}
            style={{ objectFit: 'contain' }}
          />
        </div>
        <h1 className='text-4xl text-white'>Hello</h1>
      </div>
    </div>
  );
}
