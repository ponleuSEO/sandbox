import Image from 'next/image';
import React from 'react';

export default function Two() {
  return (
    <div className='flex h-screen items-center justify-center bg-red-900'>
      <div className='relative'>
        <div className='h-screen w-[500px]'>
          <div className='absolute bottom-[40%] left-[45%] w-[400px] '>
            <Image
              alt='card-3C'
              src='/cards/card-3C.png'
              width={0}
              height={0}
              layout='responsive'
            />
          </div>
          <div className='absolute bottom-[40%] right-[45%] w-[300px] '>
            <Image
              alt='card-3H'
              src='/cards/card-3H.png'
              width={0}
              height={0}
              layout='responsive'
            />
          </div>
          <div className='absolute right-[40%] top-[40%] w-[450px] '>
            <Image
              alt='card-AS.png'
              src='/cards/card-AS.png'
              width={0}
              height={0}
              layout='responsive'
            />
          </div>
          <div className='absolute left-[45%] top-[40%] w-[450px] '>
            <Image
              alt='card-5C.png'
              src='/cards/card-5C.png'
              width={0}
              height={0}
              layout='responsive'
            />
          </div>
          <div className='absolute left-[45%] top-[40%] w-[450px] '>
            <Image
              alt='card-5C.png'
              src='/cards/card-5C.png'
              width={0}
              height={0}
              layout='responsive'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
