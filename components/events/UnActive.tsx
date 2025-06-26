'use client'
import { TProps } from '@/types/types'
import Image from 'next/image'
import React from 'react'

function UnActive({ id, img, title, info, link, onClicked}:Omit<TProps , 'active'>) {
  return (

    <div onClick={() => onClicked(id)} className='rounded-[15px] overflow-hidden relative md:w-[50%] w-[48%] cursor-pointer transition-all order-2'>
      <div className='relative w-[100%] aspect-[2/1.4] blur-[1px]' >
        <Image src={img} alt={title} fill/>
      </div>
      <div className='bg-light-pink w-full bottom-0 md:bottom-[unset] md:w-[50px] absolute left-0 z-[9]  md:top-0 md:[writing-mode:sideways-lr] md:h-full p-[10px] text-center text-white-color text-[12px] md:text-[14px]'>
        {title}
      </div>
      <div className='bg-light-pink w-[5 z-[9]px]  absolute right-0 top-0 hidden md:block [writing-mode:vertical-rl] h-full p-[10px] text-center text-white-color'>
        {title}
      </div>
    </div>
  )
}

export default UnActive