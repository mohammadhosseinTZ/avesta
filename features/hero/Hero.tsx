
import Items from "@/components/hero/Items"
import Image from "next/image"

function Hero() {
    return (
        <div className="mb-[30px]  pb-[30px]">
            <div className="bg-hero"></div>
            <div className="pt-[130px] container z-[8] relative">
                <h1 className="text-white-color text-[25px] font-bold text-center leading-11.5">
                    سامانه مدیریت الکترونیکی و هوشمند <span className="text-orange">اَوستا</span>
                    <br />
                    ارائه خدمات پیشرفته حمل و نقل کالا و لجستیک
                </h1>
                <p className="text-light-purple text-[13px] text-center font-[100] leading-11.5">
                    نخستین شرکت خلاق در دفتر معاونت علمی و فناوری ریاست جمهوری
                </p>
                <p className="text-[13px] text-orange text-center leading-11.5">
                    عارضه‌یابی، تولید، مشاوره ، پیاده‌سازی و پشتیبانی
                </p>

                <div className="relative pb-[100px] mt-[20px]">
                    <div className="relative h-[220px] w-[75%] m-[auto]"><Image loading="lazy" src={"/assets/hero-container.png"} alt="hero" objectFit="cover" fill /></div >
                    <Items/>
                </div>

            </div>
        </div>
    )
}

export default Hero