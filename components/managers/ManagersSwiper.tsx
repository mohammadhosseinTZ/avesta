'use client'

import { managers } from "@/services/managers"
import { TManagers } from "@/types/types"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules"
import Image from "next/image"

function ManagersSwiper() {
  const [mngs, setMngs] = useState<TManagers[] | []>([])
  useEffect(() => {
    const fetchData = async () => {
      const m = await managers() as TManagers[]
      setMngs(m)
    }
    fetchData()
  }, [])
  return (
    <div className=" ">

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={16}

        breakpoints={
          {
            0:{
              slidesPerView:1.5,
              slidesPerGroup:1
            } ,

            765: {
              slidesPerView: 3,
              slidesPerGroup: 3
            }
          }
        }


      >
      {
        mngs && mngs.map((item: TManagers) => (
          <SwiperSlide key={item.id}>
            <div className="rounded-[15px] border-solid border-r-2 border-[#B9B2F4] p-[15px] mngs-swiper-bg">
              <div className="flex justify-between gap-[15px]">
                <div><Image src={item['img']} alt={item['name']} width={50} height={50}/></div>
                <div className="felx flex-col justify-between">
                  <h6 className="text-white-color text-[12px] font-bold pb-[10px]">{item['title']}</h6>
                  <p className="text-white-color text-[12px]">{item['gender'] == 'man' ? 'جناب آقای' : 'سرکار خانم' } <span className="text-orange">{item['name']}</span></p>
                </div>
              </div>
              <div className="h-[1px] w-full bg-[#430A70] my-[14px] "></div>
              <p className="text-white-color text-[12px]">{item['info']}</p>
            </div>
          </SwiperSlide>
        ))
      }
      </Swiper>


    </div>
  )
}

export default ManagersSwiper

