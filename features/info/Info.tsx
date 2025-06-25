import Datas from '@/components/info/Datas'
import React from 'react'

function Info() {
    return (
        <div className='bg-info mb-[30px]'>
            <div className='container flex items-center justify-between py-[30px] pr-[15px]'>
                <Datas />
                <div className='w-[45%]'>
                    <h4 className='text-white-color text-[20px] font-bold text-right leading-11.5 '>دستاوردهای شرکت <span className='text-orange'>اَوستا‌</span> هوش‌یار</h4>
                    <p className="text-white-color text-[13px] my-[15px] text-justify">شرکت اوستا هوش‌یار با فعالیت گسترده در حوزه حمل‌ونقل، توانسته است نقش برجسته‌ای در صنعت حمل‌ونقل کشور ایفا کند. آمارهای به‌دست‌آمده نشان‌دهنده توان عملیاتی بالای این شرکت در جابه‌جایی بار، مدیریت بهینه ناوگان، و جلب اعتماد صاحبان کالا است. بررسی این داده‌ها نشان می‌دهد که اوستا باربندر در مسیر رشد و توسعه پایدار قرار دارد.</p>
                </div>
            </div>
        </div>
    )
}

export default Info