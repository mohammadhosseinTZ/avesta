'use client'
import Image from "next/image"
import Link from "next/link"
import Theme from "./theme/Theme"
import Logo from "./header/Logo"
import Menu from "./header/Menu"
import { useState } from "react"



function Header() {
    const [isOpen , setIsOpen] = useState<boolean>(false)
    
    return (
        <header className="bg-[#a8a2e614] p-[10px_20px] rounded-[48px] flex gap-6 items-center container absolute top-[20px] right-[50%] translate-x-1/2 z-[9] ">
            <div>
                <Logo />
          
            </div>
            <Menu  onClicked={()=>setIsOpen(!isOpen)} isOpen={isOpen}/>
                
            <ul className={
                `flex gap-4 [&>li]:text-[13px] md:[&>li]:text-white-color [&>li]:text-[#1D0B4D] [&>li]:cursor-pointer md:static absolute top-[70px] right-0 w-[160px] bg-white md:bg-transparent flex-col md:flex-row p-[10px] md:p-0 rounded-[15px] md:rounded-[0px] transition-all duration-300 opacity-0  ${isOpen && 'opacity-100'} md:w-[unset] md:opacity-100`
                
            } >

                <li><Link href={"/"} className="text-orange">صفحه اصلی</Link></li>
                <li ><Link className="flex gap-1 " href={"/"}>خدمات <Image src={"/assets/keyboard_arrow_down.png"} alt="arrow" width={10} height={10} /></Link></li>
                <li><Link href={"/"}>درباره اوستا</Link></li>
                <li><Link href={"/"}>فراخوان کامیون ها</Link></li>
                <li><Link href={"/"}>فرصت شغلی</Link></li>
                <li><Link href={"/"}>آرشیو دیجیتال</Link></li>
                <li><Link href={"/"}>ارتباط با ما</Link></li>
            </ul>

            <Theme />
        </header>
    )
}

export default Header