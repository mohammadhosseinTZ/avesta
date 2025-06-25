import Image from "next/image"
import Link from "next/link"
import Theme from "./theme/Theme"
import Logo from "./header/Logo"

function Header() {
    return (
        <header className="bg-[#a8a2e614] p-[10px_20px] rounded-[48px] flex gap-6 items-center container absolute top-[20px] right-[50%] translate-x-1/2 z-[9]">
            <div>
                <Logo/>
            </div>
            <ul className="flex gap-4 [&>li]:text-[13px] [&>li]:text-white-color  [&>li]:cursor-pointer">
                <li><Link href={"/"} className="text-orange">صفحه اصلی</Link></li>
                <li ><Link className="flex gap-1 " href={"/"}>خدمات <Image src={"/assets/keyboard_arrow_down.png"} alt="arrow" width={10} height={10}/></Link></li>
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