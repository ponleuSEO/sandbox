import Image from 'next/image';
import React from 'react';
import One from './one';
import Two from './two';

export default function Home() {
  return (
    <main className='m-auto w-full bg-gray-800'>
      <One></One>
      <Two></Two>
    </main>
  );
}
