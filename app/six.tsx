import mountain from '@/public/phone.png';
import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import { MotionValue, motion, useScroll } from 'framer-motion';
import useParallax from './useParallax';
export default function Six() {
  const [y, setY] = useState<MotionValue | undefined>(undefined);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const Y = useParallax(scrollYProgress, -300, 300);
  // const y = useParallax(scrollYProgress, -300, 200);
  console.log(y);
  function Card(text: string, link: string) {
    return (
      <div className='h-screen'>
        <div className='flex flex-row items-center'>
          <div className='relative aspect-[6/5] h-screen'>
            <Image src={link} fill alt='' />
          </div>
          <motion.div
            style={{ y: Y, opacity: useParallax(scrollYProgress, 50, 0) }}
          >
            <h1>{text}</h1>
          </motion.div>
        </div>
      </div>
    );
  }
  useEffect(() => {
    setY(scrollYProgress);
  }, [scrollYProgress, y]);
  return (
    <>
      <div className='background'></div>
      <p className='fixed top-0 text-3xl'>{y?.get()}</p>
      <div className='flex flex-col'>
        {Card(
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque laudantium, nisi voluptas ea quam cumque quaerat eveniet voluptatem placeat. Inventore quam doloremque omnis aliquid natus libero deserunt. Quibusdam, illum inventore?',
          '/girl2.png'
        )}
        {Card(
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque laudantium, nisi voluptas ea quam cumque quaerat eveniet voluptatem placeat. Inventore quam doloremque omnis aliquid natus libero deserunt. Quibusdam, illum inventore?',
          '/girl2.png'
        )}
        {/* 
        {Card(
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque laudantium, nisi voluptas ea quam cumque quaerat eveniet voluptatem placeat. Inventore quam doloremque omnis aliquid natus libero deserunt. Quibusdam, illum inventore?',
          '/girl2.png'
        )}
        {Card(
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque laudantium, nisi voluptas ea quam cumque quaerat eveniet voluptatem placeat. Inventore quam doloremque omnis aliquid natus libero deserunt. Quibusdam, illum inventore?',
          '/girl3.png'
        )}
        {Card(
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque laudantium, nisi voluptas ea quam cumque quaerat eveniet voluptatem placeat. Inventore quam doloremque omnis aliquid natus libero deserunt. Quibusdam, illum inventore?',
          '/girl3.png'
        )} */}
      </div>
    </>
  );
}
