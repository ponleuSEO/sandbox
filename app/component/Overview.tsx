import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { MdSpaceDashboard } from 'react-icons/md';
import { IoChatboxEllipses } from 'react-icons/io5';
import { ImStatsBars } from 'react-icons/im';
import { IoBag } from 'react-icons/io5';
import { IconType } from 'react-icons';
type Sidebar = {
  title: string;
  icon: IconType;
};

const sidebar = [
  {
    id: 1,
    title: 'Dashboard',
    icon: <MdSpaceDashboard />,
  },
  {
    id: 2,
    title: 'Product',
    icon: <IoBag />,
  },
  {
    id: 3,
    title: 'Message',
    icon: <IoChatboxEllipses />,
  },
  {
    id: 4,
    title: 'Statistic',
    icon: <ImStatsBars />,
  },
];
export default function Overview() {
  return (
    <div className='mt-4 p-4'>
      <ul>
        <h2 className='text-[12px] text-white/70'>OVERVIEW</h2>
        {sidebar.map((data) => (
          <li key={data.id} className='mt-4 flex items-center gap-3'>
            <div className='flex gap-1 text-2xl'>
              <IoIosArrowForward />
              {data.icon}
            </div>
            {data.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
