"use client"

import { ThemeContext } from "@/contexts/ThemeContext"
import Image from "next/image"
import { useContext } from "react"

function Datas() {
    const tContext = useContext(ThemeContext)
    return (
        <>
            {
                tContext.theme == "light" ?
                    <div className="relative w-[300px] aspect-[2/2] "><Image src={"/assets/achivementNumbers.png"} alt="achivementNumbers" fill /></div>
                    :

                    <div className="relative w-[300px] aspect-[2/2] "><Image src={"/assets/achivementNumbers-dark.png"} alt="achivementNumbers" fill /></div>
            }
        </>
    )
}

export default Datas