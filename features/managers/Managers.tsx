import ManagersSwiper from '@/components/managers/ManagersSwiper'
import React from 'react'

function Managers() {
  return (
    <div className='container mb-[50px]'>
      <h5 className='text-white-color text-[25px] text-center mb-[20px] font-bold   leading-11.5'><span className='text-orange'>اعتماد</span> شما سرمایه ارزشمند ما</h5>
      <ManagersSwiper/>
    </div>
  )
}

export default Managers