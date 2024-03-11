// pages/index.js

import NavMovil from '@/app/nav/NavMovil';
import NavPc from '@/app/nav/NavPc';
import dynamic from 'next/dynamic';
import './css/home.css';

const BackPc = dynamic(() => import('@/app/page/BackPc'), { ssr: false });

export default function Home() {
  return (
    <div>      
      <div className='content-nav-movil'>
        <NavMovil/>
      </div>
      <div className='content-nav-pc'>
        <BackPc/>
        <NavPc/>
      </div>
    </div>
  );
}
