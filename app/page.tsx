import React from 'react'
import style from './css/herosection.module.css'
import Image from 'next/image'

export default function Homepage() {
  return (
    <div className=''>
      <div className=''>
        <div className='relative h-96 after:absolute after:bottom-0 after:w-full after:h-32 after:bg-white'>
          <Image
          className='w-full bg-cover object-cover absolute top-0 left-0 -z-10 max-h-96'
          width={2400}
          height={2100}
          src='https://images.unsplash.com/photo-1696388790726-68161096266e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
          />
        </div>
        <div>
          <h1 className={`lg:text-5xl font-semibold  text-3xl ${style.primary_text} text-center flex justify-center items-center h-96`}>Change your thinking knowledge</h1>
        </div>
      </div>
    </div>
  )
}
