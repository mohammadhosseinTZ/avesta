'use client'
import React, { useState } from 'react'
import Event from './Event'


function EventsWrapper() {
    const [active, setActive] = useState<number>(1)
    const handleClicked = (id: number) => {
        setActive(id);
    }
    return (
        <div className='relative md:mb-[80px] mb-[30px] flex justify-between flex-wrap'>
            <Event
                id={1}
                img={"/assets/events/1.jpg"}
                title={"حضـور افتخــار آفریـن شرکت اوستــا هوش‌یادر همایش ملی حکمت"}
                info={
                    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'

                }
                link={"/"}
                onClicked={handleClicked}
                active={active}

            />
            <Event
                id={2}
                img={"/assets/events/2.jpg"}
                title={"مراسم بزرگداشت روز کارگر"}
                info={
                    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'

                }
                link={"/"}
                onClicked={handleClicked}
                active={active}

            />
            <Event
                id={3}
                img={"/assets/events/3.jpg"}
                title={"اخذ مجوز از سازمان نظام صنفی "}
                info={
                    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'

                }
                link={"/"}
                onClicked={handleClicked}
                active={active}

            />
        </div>
    )
}

export default EventsWrapper
