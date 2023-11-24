import Image from 'next/image';
import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

export default function SidebarHeader() {
  return (
    <section className='w-full'>
      <div className='mb-4 flex w-full justify-between p-2'>
        <div className='flex gap-2'>
          <div className='relative aspect-square w-12'>
            <Image alt='logo' src='/sidebar/logo.png' fill></Image>
          </div>
          <div>
            <h1 className='text-xl'>Randomization</h1>
            <p className='text-sm text-white/80'>Technology</p>
          </div>
        </div>
        <div className='flex items-center text-3xl text-white/80'>
          <IoIosArrowBack />
        </div>
      </div>
      <hr className='border-gray-600' />
    </section>
  );
}
