'use client'

import { ThemeContext } from "@/contexts/ThemeContext"
import Image from "next/image"
import { useContext } from "react"

function Logo() {
    const tContext = useContext(ThemeContext)
  return (
    <>
    
        {
            tContext.theme == 'light' ?
            <Image src={"/assets/logo-dark.png"} alt="logo" width={60} height={60} />
            :
            <Image src={"/assets/logo-light.png"} alt="logo" width={50} height={50} />
        }
    </>
  )
}

export default Logo