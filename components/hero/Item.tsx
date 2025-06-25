import Image from 'next/image'
import React from 'react'

function Item({img , title , className} : {img:string , title:string , className?:string}) {
  return (
    <div className={`absolute cursor-pointer ${className}`} >
        <div className='relative w-[60px] h-[60px]'><Image src={img} alt={title} fill /></div>
        <p className='mt-[10px] text-white text-[11px] text-center'>{title}</p>
    </div>
  )
}

export default Item