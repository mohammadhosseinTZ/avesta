import Image from 'next/image'
import React from 'react'

function Services() {
    return (
        <div className='container services-bg mb-[20px]'>
            <h2 className='text-white-color text-[20px] font-bold text-center leading-11.5 py-[20px]'> خدمات جامع و چندوجهی <span className='text-orange'>اَوستا</span> هوش‌یار در حوزه حمل‌ونقل</h2>

            <div className='flex flex-row-reverse'>
                <div className='relative w-[100%] aspect-[3/2]'><Image src="/assets/servicesImage.png" alt='services' fill objectFit='container' /></div>
                <ul className='[&>li]:text-white-color [&>li]:mb-[10px] [&>li]:before:ml-[15px]   [&>li]:before:content-[""]  [&>li]:before:inline-block [&>li]:before:rounded-[10px] '>

                    <li className='before:bg-orange before:min-w-[5px] before:w-[5px]  before:h-[73px] flex items-center'>
                        <div>
                            <div className='flex gap-[10px] mb-[10px]'>
                                <Image src={"/assets/serviceIcon.png"} alt='services' width={20} height={20} />
                                <span className='text-[14px]'>سامانه ترخیص کالا</span>
                            </div>
                            <p className='text-[11px]'>با سامانه ترخیص کالا، می‌توانید کلیه مراحل از ثبت سفارش تا دریافت کالا را به صورت شفاف، آسان و مطمئن مدیریت کنید.</p>

                        </div>
                    </li>
                    <li className='before:bg-[#c4bcfc]  before:h-[23px] before:min-w-[3px] flex items-center before:w-[3px]'>
                        <p className='text-[12px]'>
                            مدیریت هوشمند حمل جاده‌ای
                        </p>
                    </li>
                    <li className='before:bg-[#c4bcfcd9]  before:h-[23px] before:min-w-[3px] flex items-center before:w-[3px]'>
                        <p className='text-[12px]'>
                            برنامه‌ریزی و پهلودهی کشتی
                        </p>
                    </li>
                    <li className='before:bg-[#c4bcfcad]  before:h-[23px] before:min-w-[2.5px] flex items-center before:w-[2.5px]'>
                        <p className='text-[12px]'>
                            مدیریت جابجایی کالا
                        </p>
                    </li>
                    <li className='before:bg-[#c4bcfc8a]  before:h-[23px] before:min-w-[2px] flex items-center before:w-[2px]'>
                        <p className='text-[12px] !text-dark-gray'>
                        مدیریت حمل و نقل کالا
                        </p>
                    </li>
                    <li className='before:bg-[#c4bcfc4f]  before:h-[23px] before:min-w-[1.5px] flex items-center before:w-[1.5px]'>
                        <p className='text-[12px] !text-light-gray'>
                        مدیریت هوشمند ترافیک (ITS)
                        </p>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Services