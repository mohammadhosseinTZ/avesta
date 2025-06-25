"use client"

import React, { useContext } from 'react'
import Item from './Item'
import { ThemeContext } from '@/contexts/ThemeContext'

function Items() {
    const tContext = useContext(ThemeContext)


    return (
        <>



            {
                tContext.theme == "light" ?
                    <>
                        <Item img="/assets/AiIcon.png" title="هوش مصنوعی" className={"bottom-0 right-[50%] translate-x-1/2"} />
                        <Item img="/assets/TrainIcon.png" title="حمل ریلی" className={"bottom-[70px] right-0"} />
                        <Item img="/assets/TruckIcon.png" title="حمل جاده ای" className={"left-0 bottom-[70px]"} />
                        <Item img="/assets/shipIcon.png" title="حمل دریایی" className={"left-0 top-0"} />
                        <Item img="/assets/airplaneIcon.png" title="حمل هوایی" className={"top-0 right-0"} />
                    </> :
                    <>
                        <Item img="/assets/ai-1.png" title="هوش مصنوعی" className={"bottom-0 right-[50%] translate-x-1/2"} />
                        <Item img="/assets/airplaneIcon-22.png" title="حمل ریلی" className={"bottom-[70px] right-0"} />
                        <Item img="/assets/airplaneIcon-2.png" title="حمل جاده ای" className={"left-0 bottom-[70px]"} />
                        <Item img="/assets/airplaneIcon-1.png" title="حمل دریایی" className={"left-0 top-0"} />
                        <Item img="/assets/airplaneIcon-11.png" title="حمل هوایی" className={"top-0 right-0"} />
                    </>
            }

        </>
    )
}

export default Items