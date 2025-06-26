import { TProps } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Active({ id, img, title, info, link }: Omit<TProps, "onClicked" | "active">) {
    return (
        <div className='absolute z-[99] transition-all flex left-[50%] scale-[1.1] translate-x-[-50%]'>
            <div className='relative w-[290px] aspect-[2/1] rounded-[15px] overflow-hidden translate-x-[-34px] z-[8] '><Image src={img} alt={title} fill /></div>
            <div className='bg-light-pink w-[240px] z-[88] relative scale-[1.1]  p-[20px_30px] rounded-[15px] '>
                <h5 className='text-white-color text-[16px] font-bold '>{title}</h5>
                <div className='h-[2px] bg-white-color w-full my-[15px]'></div>
                <p className='text-white-color text-[11px] text-justify'>{info}</p>
                <Link href={link}
                className='text-[11px] text-white-color rounded-[20px] p-[8px] border-[1px] mt-[20px] border-solid border-white-color flex gap-[10px] items-center w-fit m-auto flex-row-reverse'>
                    مشاهده جزئیات خبر <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.8125 10.175H4.275C4.0875 10.175 3.925 10.1125 3.7875 9.9875C3.6625 9.85 3.6 9.6875 3.6 9.5C3.6 9.3125 3.6625 9.15625 3.7875 9.03125C3.925 8.89375 4.0875 8.825 4.275 8.825H11.8125L10.3125 7.325C10.175 7.1875 10.1063 7.03125 10.1063 6.85625C10.1063 6.66875 10.175 6.50625 10.3125 6.36875C10.45 6.23125 10.6063 6.1625 10.7813 6.1625C10.9688 6.1625 11.1313 6.23125 11.2688 6.36875L13.9313 9.03125C13.9938 9.09375 14.0375 9.16875 14.0625 9.25625C14.1 9.33125 14.1188 9.4125 14.1188 9.5C14.1188 9.5875 14.1 9.675 14.0625 9.7625C14.0375 9.8375 13.9938 9.90625 13.9313 9.96875L11.2688 12.6312C11.1313 12.7687 10.975 12.8375 10.8 12.8375C10.625 12.825 10.4688 12.75 10.3313 12.6125C10.1938 12.475 10.125 12.3187 10.125 12.1437C10.125 11.9562 10.1938 11.7937 10.3313 11.6562L11.8125 10.175Z" fill="#FAFAFA" />
                    </svg>

                </Link>
            </div>
        </div>
    )
}

export default Active