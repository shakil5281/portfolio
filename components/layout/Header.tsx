import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='fixed z-30 top-0 left-0 w-full py-6 px-4'>
      <div className='max-w-7xl m-auto'>
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='text-3xl font-semibold text-white'>Portfolio.</h1>
          </div>
          <div className='hidden md:flex'>
            <div>
              <ul className='flex'>
                {
                  ['Feature', 'Project', 'About us', 'Contact'].map((item, index) => (
                    <li key={index}><Link className='px-4 py-4 text-white hover:text-gray-100 duration-200 text-md font-normal
                    ' href='/'>{item}</Link> </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
