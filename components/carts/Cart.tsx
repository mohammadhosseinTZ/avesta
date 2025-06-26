'use client'
import { ThemeContext } from "@/contexts/ThemeContext"
import Item from "./Item"
import { useContext } from "react"


function Cart() {
    const tContext = useContext(ThemeContext)
    return (
        <div className="flex justify-between mt-[40px] flex-wrap">
            <Item src={`${tContext.theme == 'light' ? "/assets/cart-1.png" : "/assets/cart-21.png"}`} title="فرایند آسان" text="بهره‌گیری از فناوری‌های ارتباطی برای تسهیل تمامی مراحل حمل‌ونقل" />
            <Item src={`${tContext.theme == 'light' ? "/assets/cart-2.png" : "/assets/cart-22.png"}`} title="سرعت و شفافیت" text="بکارگیری تکنولوژی‌های نوین برای تسریع و رصد لحظه‌ای محموله‌ها" />
            <Item src={`${tContext.theme == 'light' ? "/assets/cart-3.png" : "/assets/cart-23.png"}`} title="کاهش هزینه‌ها" text="بهینه‌سازی مسیرها و فرآیندها برای صرفه‌جویی در هزینه‌های حمل‌ونقل" />
            <Item src={`${tContext.theme == 'light' ? "/assets/cart-4.png" : "/assets/cart-24.png"}`} title="دسترسی لحظه‌ای" text="امکان مشاهده و مدیریت اطلاعات بار در هر زمان و مکان" />
        </div>
    )
}

export default Cart