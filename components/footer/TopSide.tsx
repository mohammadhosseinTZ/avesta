'use client'

import { ThemeContext } from "@/contexts/ThemeContext"
import Image from "next/image"
import { useContext } from "react"

function TopSide() {
    const tContext = useContext(ThemeContext)
  return (
    <div className="relative w-full h-[170px] md:h-[370px]">
        <Image src={tContext.theme == 'light' ? '/assets/footer/videoContainer.png' : '/assets/footer/videoContainer-1.png'} alt="footer" fill/>
    </div>
  )
}

export default TopSide