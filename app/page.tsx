import React from 'react'
import style from './css/herosection.module.css'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Homepage() {
  return (
    <div className='bg-gray-100 dark:bg-black'>
      <div className='grid grid-cols-2 min-h-[90vh]'>
        <div className='h-full flex flex-col justify-center items-center'>
         <div className='inline-block'>
         <h1 className='text-5xl font-semibold'>Change your mind set</h1>
         </div>
          <div className='inline-block translate-y-10'>
          <Button>Contact Us</Button>
          </div>
        </div>
        <div className='h-full flex justify-center items-center'>
            <Image
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
