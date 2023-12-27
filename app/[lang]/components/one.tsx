import React from 'react';
import Image from 'next/image';

export default function One() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='relative'>
        <div className='w-[400px]'>
          <Image
            alt='img1'
            src='/img1.png'
            width={0}
            height={0}
            layout='responsive'
          />
          <div className='absolute top-20 w-[200px]'>
            <Image alt='img1' src='/tick.gif' layout='fill' />
          </div>
        </div>
      </div>
    </div>
  );
}
