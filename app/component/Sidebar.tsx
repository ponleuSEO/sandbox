import React, { useEffect, useState } from 'react';
import SidebarHeader from './SidebarHeader';
import Overview from './Overview';

export default function Sidebar() {
  return (
    <div className='h-screen w-72 bg-slate-500'>
      <SidebarHeader></SidebarHeader>
      <Overview></Overview>
    </div>
  );
}
