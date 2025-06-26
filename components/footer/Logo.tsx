'use client'
import { ThemeContext } from '@/contexts/ThemeContext'
import Image from 'next/image'
import React, { useContext } from 'react'

function Logo() {
    const tContext = useContext(ThemeContext)
  return (
    <div className='pb-[30px]'>
        <Image src={tContext.theme == 'dark '  ?"/assets/footer/Logo Container).png" :"/assets/footer/Logo Container.png"  } alt='logo' width={100} height={100}/>
    </div>
  )
}

export default Logo