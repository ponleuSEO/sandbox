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
      imageLink: '/girl3.png',
      imageAlt: '2',
    },
    text: 'Text 2',
  },
];

export default function Five() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, -200, 200);
  console.log(y); // return <>{[1, 2, 2, 1].map((data: number) => ImageLoad(data, 450))}</>;
  function ImageLoad(
    id: number,
    depth: number,
    text: string,
    src: string,
    alt: string
  ) {
    return (
      <>
        <div ref={ref} className='grid h-full grid-cols-5 bg-red-500'>
          <div className='relative col-span-3 '>
            <Image src={src} alt={alt} fill />
          </div>
          <motion.div
            style={{ y: y, opacity: useParallax(scrollYProgress, 0, 100) }}
            className='col-span-2 flex flex-col items-start justify-center text-xl '
          >
            <p>
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
              ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
              non, magni minus nemo odio tempora praesentium, expedita dolores
              ipsa unde autem assumenda blanditiis voluptas voluptatem sunt
              repellendus. Hic, sunt modi.
            </p>
            <button className='mt-10 bg-red-500 px-8 py-4'>Click me</button>
          </motion.div>
        </div>
      </>
    );
  }
  return (
    <div className=' h-full overflow-hidden'>
      {data.map((data) =>
        ImageLoad(
          data.id,
          300,
          data.text,
          data.image.imageLink,
          data.image.imageAlt
        )
      )}
    </div>
  );
}
