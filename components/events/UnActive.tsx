'use client'
import { TProps } from '@/types/types'
import Image from 'next/image'
import React from 'react'

function UnActive({ id, img, title, info, link, onClicked}:Omit<TProps , 'active'>) {
  return (

    <div onClick={() => onClicked(id)} className='rounded-[15px] overflow-hidden relative w-[50%] cursor-pointer transition-all'>
      <div className='relative w-[100%] aspect-[2/1.4]' >
        <Image src={img} alt={title} fill/>
      </div>
      <div className='bg-light-pink w-[50px] absolute left-0 z-[9] top-0 [writing-mode:sideways-lr] h-full p-[10px] text-center text-white-color'>
        {title}
      </div>
      <div className='bg-light-pink w-[5 z-[9]px]  absolute right-0 top-0 [writing-mode:vertical-rl] h-full p-[10px] text-center text-white-color'>
        {title}
      </div>
    </div>
  )
}

export default UnActive