import React from 'react'
import style from './css/herosection.module.css'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Homepage() {
  return (
    <div className='bg-gray-100 dark:bg-black'>
      <div className='grid grid-cols-2 lg:min-h-[90vh] min-h-[30vh]'>
        <div className='h-full flex flex-col justify-center items-center col-span-2 lg:col-span-1'>
         <div className='inline-block'>
         <h1 className='lg:text-5xl text-3xl text-center font-semibold'>Change your mind set</h1>
         </div>
          <div className='inline-block translate-y-10'>
          <Button>Contact Us</Button>
          </div>
        </div>
        <div className='h-full lg:flex justify-center items-center hidden'>
            <Image
              className='p-24'
              width={1200}
              height={900}
              src='https://astroship.web3templates.com/_astro/hero.6fdd0dc6_Z2mbqjy.webp'
              alt='hero image'
            />
        </div>
      </div>
    </div>
  )
}
