import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll } from 'framer-motion';
import useParallax from './useParallax';
const data = [
  {
    id: 1,
    image: {
      imageLink: '/girl2.png',
      imageAlt: '1',
    },
    text: 'Text 1',
  },
  {
    id: 2,
    image: {
      imageLink: '/2.webp',
      imageAlt: '2',
    },
    text: 'Text 2',
  },
];
function ImageLoad(
  id: number,
  depth: number,
  text: string,
  src: string,
  alt: string
) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, -500, 500);
  return (
    <>
      <div className='scroll relative flex h-screen flex-row items-center gap-10 overflow-hidden '>
        <div
          ref={ref}
          className='relative aspect-square w-[1200px] bg-blue-500'
        >
          <Image src={src} alt={alt} fill />
        </div>
        <motion.div
          style={{
            y: y,
          }}
          className='basis-1/3 text-xl'
        >
          <p>
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem velit cupiditate aperiam nesciunt ratione deserunt
            minima itaque corrupti ad autem, dolorem porro odio aspernatur a
            explicabo iure ipsam ipsa nostrum. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Eaque explicabo rem earum aspernatur
            suscipit voluptatum asperiores deleniti blanditiis inventore quod?
            Voluptatum repellendus natus praesentium perspiciatis sed, ipsam
            porro atque rerum! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Architecto minima totam eligendi quis reiciendis
            expedita eum ipsum quidem sapiente iusto autem, corrupti, nam
            aspernatur officiis aperiam earum, rem illum praesentium. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Laudantium non,
            magni minus nemo odio tempora praesentium, expedita dolores ipsa
            unde autem assumenda blanditiis voluptas voluptatem sunt
            repellendus. Hic, sunt modi.
          </p>
          <button className='mt-10 bg-red-500 px-8 py-4'>Click me</button>
        </motion.div>
      </div>
    </>
  );
}

export default function Five() {
  // return <>{[1, 2, 2, 1].map((data: number) => ImageLoad(data, 450))}</>;
  return data.map((data) =>
    ImageLoad(
      data.id,
      700,
      data.text,
      data.image.imageLink,
      data.image.imageAlt
    )
  );
}
