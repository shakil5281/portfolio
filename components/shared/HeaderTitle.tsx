import React from 'react'

export default function HeaderTitle(props: any) {
    return (
        <div className='bg-gray-100 w-full h-60 flex justify-center items-center dark:bg-gray-900'>
            <h1 className='text-3xl font-semibold text-gray-500 dark:text-gray-300'>{props.title}</h1>
        </div>
    )
}
