
import { TProps } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SvgArrow from './SvgArrow'

function Active({  img, title, info, link }: Omit<TProps, "onClicked" | "active" | "id">) {
    return (
        <div className='md:absolute z-[99] transition-all flex left-[50%] items-center md:items-stretch md:scale-[1.1] md:translate-x-[-50%] mb-[50px] md:mb-[0px] order-1'>
            <div className='md:relative w-[138px] md:w-[340px] h-[180px] md:h-[unset] aspect-[2/1] rounded-[15px] overflow-hidden translate-x-[-34px] z-[8] '>
                <Image src={img} alt={title} fill /></div>
            <div className='bg-light-pink w-[170px] md:w-[240px] z-[88] relative scale-[1.1]  p-[10px_15px] md:p-[20px_30px] rounded-[15px] '>
                <h5 className='text-white-color text-[14px] md:text-[16px] font-bold '>{title}</h5>
                <div className='h-[2px] bg-white-color w-full my-[15px]'></div>
                <p className='text-white-color text-[11px] text-justify'>{info}</p>
                <Link href={link}
                    className='text-[11px] text-white-color rounded-[20px] p-[8px] border-[1px] mt-[20px] border-solid border-white-color flex gap-[10px] items-center w-fit m-auto flex-row-reverse'>
                    مشاهده جزئیات خبر <SvgArrow />

                </Link>
            </div>
        </div>
    )
}

export default Active