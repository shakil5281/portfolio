"use client"

import React from 'react';
import DarkMode from '@/app/Mode'
import Link from 'next/link'
import { AlignRight } from 'lucide-react';
import { Button } from '../ui/button';

export default function Header() {
  const [drawer, setdrawer] = React.useState(false)
  return (
    <div className='top-0 left-0 w-full py-6 px-4 shadow dark:shadow-gray-300'>
      <div className='max-w-7xl m-auto'>
        <div className='flex justify-between items-center'>
          <div className='flex'>
            <button onClick={() => setdrawer(!drawer)} className='px-4 flex lg:hidden mt-1'><AlignRight size={30} width={30} /></button>
            <Link href='/'>
              <h1 className='text-3xl font-semibold'>Portfolio.</h1>
            </Link>
            {
              drawer && <div onClick={()=>setdrawer(false)} className={`absolute top-0 left-0 bg-[#313131c9] w-full h-full z-10`}>
                <div className='relative h-full bg-white w-2/3'>
                  <div className='flex justify-between items-center'>
                    <div>
                      Protfolio.
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
          <div className=''>
            <div>
              <ul className='flex'>
                {
                  items?.map((item, index) => (
                    <li key={index}><Link className='px-4 py-4 hidden md:inline duration-200 text-md font-normal
                    ' href={`${item.link}`}>{item?.title}</Link> </li>
                  ))
                }
                <li className='-mt-2'>
                  <DarkMode />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const items = [
  {
    link: '/features',
    title: 'Feature'
  },
  {
    link: '/projects',
    title: 'Project'
  },
  {
    link: '/about-us',
    title: 'About Us'
  },
  {
    link: '/contact-us',
    title: 'Contact'
  }
]