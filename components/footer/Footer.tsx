import React from 'react'
import TopSide from './TopSide'
import Logo from './Logo'
import List from './List'
import Link from 'next/link'
import Image from 'next/image'
import LInkdin from './LInkdin'
import Instagram from './Instagram'
import Youtube from './Youtube'

function Footer() {
    return (
        <div className='mt-[30px] md:mt-[170px]'>
            <TopSide />
            <div className='footer-bg flex justify-between flex-col'>
                <div className='container p-[34px_0px] md:p-[64px_0px]'>
                    <Logo />
                    <div className='flex flex-wrap md:gap-[10px]'>
                        <List
                            title='منو'
                            list={['صفحه اصلی', 'خدمات', 'درباره ما', 'فراخوان کامیون ها', 'فرصت های شغلی', 'آرشیو دیجیتال', 'ارتباط باما']}
                        />
                        <List title='دفتر تهران' list={[
                            'طرشت، مترو دانشگاه شریف خیابان تیموری نرسیده به اتوبان یادگار امام کوچه عموزاد پ8',
                            'تلفن: ۰۲۱-۴۴۴۴۲۲۲۲۱'
                        ]} />
                        <List title='دفتر خوزستان'
                            list={[
                                'طرشت، مترو دانشگاه شریف خیابان تیموری نرسیده به اتوبان یادگار امام کوچه عموزاد پ8',
                                'تلفن: ۰۲۱-۴۴۴۴۲۲۲۲۱'
                            ]}
                        />
                    </div>
                </div>
                <div className='flex items-center justify-between border-t border-solid border-white-color p-[20px_0px] container'>
                    <div className='flex items-center gap-[10px]'>
                        <Link href={"/"}> <LInkdin/></Link>
                        <Link href={"/"}><Instagram/> </Link>
                        <Link href={"/"}> <Youtube/></Link>
                    </div>
                    <p className='text-[12px] text-white-color'>AvestaSmart @ 2025. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer