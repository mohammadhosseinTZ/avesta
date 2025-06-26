'use client'

import { ThemeContext } from "@/contexts/ThemeContext"
import Image from "next/image"
import { useContext } from "react"

function Banner() {
    const tContext = useContext(ThemeContext)
  return (
    <div className="mb-[50px]">
        {
            <div className="w-full h-[55px] md:h-[85px] relative">
                <Image src={`${tContext.theme =='light' ?"/assets/Collaborations.png" : "/assets/Collaborations-1.png"}`} alt="Collaborations" fill/>
            </div>    
        }
    </div>
  )
}

export default Banner