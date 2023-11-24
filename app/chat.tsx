import React from 'react';
import Image from 'next/image';
type Prop = {
  text: string;
  image?: string;
};
export default function Chat({ text, image }: Prop) {
  return (
    <div>
      <p className='text-3xl text-blue-500'>{text}</p>
      <div className='relative aspect-square w-96'>
        {image && <Image src={image} alt='' fill />}
      </div>
    </div>
  );
}
