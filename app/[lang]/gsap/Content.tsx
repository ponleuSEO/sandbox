import React from 'react';
import Image from 'next/image';

export default function Content() {
  return (
    <>
      <div>
        <h1 className='text-3xl'>The Best Game in the Casino</h1>
        <p className='text-xl'>Baccarat is Easy to play</p>
        <button className='mt-4 bg-red-500 px-3 py-2'>Play Now</button>
      </div>
      <div className='relative aspect-square h-[600px]'>
        <Image src={'/cards/card-3C.png'} alt='' fill />
      </div>
    </>
  );
}
