import Link from 'next/link'
import React from 'react'

function List({title , list} : {title:string , list:string[]}) {
  return (
    <ul className='md:[&>li]:text-[12px] [&>li]:text-[14px] [&>li]:text-white-color list-none md:min-w-[160px] min-w-[calc(100%/2-10px)] md:max-w-[200px] mb-[10px] md:mb-[0px] md:gap-[14px]'>
        <li className='!text-orange md:pb-[15px] pb-[5px]'> <Link href={'/'}>{title}</Link></li>
        {list.map((item:string , i:number) => <li key={i}><Link href={'/'}>{item}</Link></li>)}

    </ul>
  )
}

export default List