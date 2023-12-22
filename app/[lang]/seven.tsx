import Image from 'next/image';
import React from 'react';

export default function Seven() {
  return (
    <div className='grid place-items-center'>
      <div className='grid-row-6 relative mx-10 grid aspect-square w-[60%] grid-cols-3 gap-2'>
        <div className='relative row-span-2 w-full bg-red-500'>
          <div className='absolute aspect-square h-[150px]'>
            <Image src='/chip.png' alt='' fill />
          </div>
        </div>
        <div className='row-span-4 bg-blue-500'>hello</div>
        <div className='row-span-2 bg-green-500'>hello</div>
        <div className='row-span-4 bg-purple-500'>hello</div>
        <div className='row-span-2 bg-orange-500'>hello</div>
        <div className='row-span-2 bg-slate-400'>hello</div>
        <div className='row-span-2 bg-yellow-500'>hello</div>
      </div>
    </div>
  );
}
