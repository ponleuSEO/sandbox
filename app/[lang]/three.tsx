import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { AiFillCheckCircle } from 'react-icons/ai';
import services from '@/mock-data/service';
type Service = {
  id: number;
  list: string[];
};

export default function Three() {
  return (
    <div className='bg-slate-100 text-black'>
      <div className='space-y-[20px] py-[40px] md:py-[100px]  '>
        <div className='grid grid-cols-3 gap-[20px] '>
          {services.map((service) => (
            <div
              key={service.id}
              className='bg-gradient rounded-[10px] px-[20px] py-[50px] '
            >
              <div className='flex items-center justify-center'>
                <div className='mx-auto w-full max-w-[100px]'>
                  <Image
                    src='/gogo-marketing/graph.png'
                    height={0}
                    width={0}
                    layout='responsive'
                    alt='graph'
                  />
                </div>
              </div>

              <div className=' '>
                <h3 className='text-subtitle line-clamp-2 text-center font-bold '>
                  SEO银计划
                </h3>
              </div>
              <div className='flex items-center justify-center '>
                <div className='flex h-full p-[10px]'>
                  <h4 className='text-h1 text-center  font-bold '>
                    $1,600
                    <span className='text-p font-normal'> / 每月</span>
                  </h4>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center  '>
                <div className='h-[450px]'>
                  <div className='space-y-[10px]'>
                    {service.list.map((load, index) => (
                      <li
                        key={index}
                        className='flex items-center justify-start'
                      >
                        <AiFillCheckCircle className='text-24px text-purple-800' />
                        <p className='text-li'>{load}</p>
                      </li>
                    ))}
                  </div>
                </div>
                <div className='flex justify-center '>
                  <Link href='https://t.me/Gogo_marketing'>
                    <button
                      type='button'
                      className='text-p hover:bg-primary hover:text-secondary text-primary rounded-full bg-yellow-400 px-[40px] py-[10px] font-semibold transition-all hover:scale-110 '
                    >
                      立即咨询
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
