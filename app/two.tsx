'use client';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';
import useParallax from './useParallax';

export default function Two() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  return (
    <div className='flex h-screen w-full items-center justify-center bg-red-900'>
      <div className='relative'>
        <div className='h-screen w-[500px]'>
          <motion.div
            style={{
              y: useParallax(scrollYProgress, 100, -180),
              rotate: useParallax(scrollYProgress, -10, 10),
            }}
            className='absolute bottom-[40%] left-[45%] w-[400px] '
          >
            <Image
              alt='card-3C'
              src='/cards/card-3C.png'
              width={0}
              height={0}
              layout='responsive'
            />
          </motion.div>

          <motion.div
            style={{
              y: useParallax(scrollYProgress, 100, -150),
              rotate: useParallax(scrollYProgress, 10, -10), // Add rotation based on parallax
            }}
            className='absolute bottom-[40%] right-[45%] w-[300px] '
          >
            <Image
              alt='card-3H'
              src='/cards/card-3H.png'
              width={0}
              height={0}
              layout='responsive'
            />
          </motion.div>
          <motion.div
            style={{
              y: useParallax(scrollYProgress, 300, -500),
              rotate: useParallax(scrollYProgress, 10, -10),
            }}
            className='absolute right-[40%] top-[45%] w-[450px]'
          >
            <Image
              alt='card-AS.png'
              src='/cards/card-AS.png'
              width={0}
              height={0}
              layout='responsive'
            />
          </motion.div>
          <motion.div
            style={{
              y: useParallax(scrollYProgress, 200, -450),
              rotate: useParallax(scrollYProgress, -10, 20),
            }}
            className='absolute left-[45%] top-[50%] w-[450px] '
          >
            <Image
              alt='card-5C.png'
              src='/cards/card-5C.png'
              width={0}
              height={0}
              layout='responsive'
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
