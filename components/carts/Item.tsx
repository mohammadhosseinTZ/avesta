import Image from "next/image"
type TCart = Record<'src' | 'title' | 'text', string>
function Item({ src, title, text }: TCart) {
    return (
        <div className="md:w-[calc(100%/4-20px)] w-[calc(100%/2-10px)]  cart-item text-center rounded-[15px] p-[15px] mb-[15px] md:mb-[0px]">
            <div className=""><Image src={src} alt={title} width={40} height={40} className="m-auto"/></div>
            <h5 className="text-white-color text-[13px] my-[14px]">{title}</h5>
            <p className="text-white-color text-right  text-[13px] pb-[10px] px-[13px]">
                {text}
            </p>
        </div>
    )
}

export default Item