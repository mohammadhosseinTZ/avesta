'use client'

import { ThemeContext } from '@/contexts/ThemeContext'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('system')
  const [mounted, setMounted] = useState(false)
  const tContext = useContext(ThemeContext )
    
    

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null
    if (stored) {
        setTheme(stored)
        tContext.setTheme(stored)
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const applyTheme = () => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else if (theme === 'light') {
        document.documentElement.classList.remove('dark')
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        if (prefersDark) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }
    }

    applyTheme()
  }, [theme, mounted])

  const toggle = () => {
    const nextTheme: Theme =
      theme === 'system' ? 'dark' : theme === 'dark' ? 'light' : 'system'

    setTheme(nextTheme)
    tContext.setTheme(nextTheme)
    console.log(tContext.theme , nextTheme);

    if (nextTheme === 'system') {
      localStorage.removeItem('theme')
    } else {
      localStorage.setItem('theme', nextTheme)
    }
  }

  if (!mounted) return null

  return (
    <button onClick={toggle} className="text-xl p-2">
      {theme === 'dark' ? 
      <Image src="/assets/dark-mode.png" alt="dark" width={35} height={35}/> : theme === 'light' ? 
      <Image src="/assets/light-mode.png" alt="dark" width={35} height={35}/> : 
      <Image src="/assets/pc.png" alt="pc" width={30} height={30}/>}
    </button>
  )
}