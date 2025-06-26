'use client'
import { TDocs } from "@/types/types"
import Image from "next/image"


function Images({ documents , onClicked , filter }: { documents: TDocs[] , onClicked:(item : TDocs)=> void , filter:number }) {
    return (
        <div className='flex justify-between overflow-hidden rounded-[0px_0px_15px_15px] z-[9] relative' >
            {documents.map(el => <div key={el.id} className={`relative w-[calc(100%/9-2px)] aspect-[1/1.6] cursor-pointer ${el['id'] == filter ?'brightness-100' : 'brightness-25'}`}
             onClick={() => onClicked(el)
        }>
                <Image src={el.img} alt='doc' fill /></div>)}
        </div>
    )
}

export default Images