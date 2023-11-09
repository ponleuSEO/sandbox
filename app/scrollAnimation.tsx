'use client';
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollAnimation() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className='fixed h-1 w-full bg-blue-500'
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
    </>
  );
}
