import { TDocs } from '@/types/types'
import Image from 'next/image'
import React from 'react'

function Hero({ document }: { document: TDocs }) {
    return (
        <div className='flex justify-between md:p-[30px_40px_0px_64px] p-[10px_20px_0px_24px] gap-[20px] items-center flex-col md:flex-row'>
            <div className='md:w-[55%] w-full'>
                <h5 className='text-white-color text-[18px] font-bold   leading-9 md:leading-11.5'>{document['title']}</h5>
                <p className='text-white-color text-[14px]    leading-9.5'>{document['text']}</p>
            </div>
            <div className='relative w-[33%] aspect-[2/3] shadow-[-4px 52px 32px -9px #e168f840;] scale-[1.1] md:scale-[1.3] z-[99]'><Image src={document['img']} alt='doc' fill /></div>
        </div>
    )
}

export default Hero