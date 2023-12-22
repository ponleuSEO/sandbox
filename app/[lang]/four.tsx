import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  EffectFade,
  Autoplay,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Four() {
  const data = [
    {
      id: 1,
      link: 'https://images.unsplash.com/photo-1698591020373-6a183ba43308?auto=format&fit=crop&q=80&w=680&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      link: 'https://images.unsplash.com/photo-1698444214003-dfdea976064a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8',
    },
    {
      id: 3,
      link: 'https://plus.unsplash.com/premium_photo-1696617442016-aedc14e87620?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8',
    },
    {
      id: 4,
      link: 'https://images.unsplash.com/photo-1682687980976-fec0915c6177?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8',
    },
  ];
  return (
    <Swiper
      effect={'coverflow'}
      coverflowEffect={{
        rotate: 0,
        modifier: 2,
      }}
      loop={true}
      // autoplay={{
      //   delay: 1500,
      // }}
      centeredSlides={true}
      slidesPerView={2}
      pagination={true}
      navigation
      modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
      className='mySwiper relative'
    >
      <ul>
        {data.map((data) => (
          <li key={data.id} className='relative bg-blue-500'>
            <SwiperSlide>
              <div className='aspect-video'>
                <Image
                  src={data.link}
                  sizes='(max-width: 768px) 100vw, 33vw'
                  fill
                  objectFit='cover'
                  alt='image.png'
                />
              </div>
            </SwiperSlide>
          </li>
        ))}
      </ul>
    </Swiper>
  );
}
