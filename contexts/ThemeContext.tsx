"use client"
interface TProvider{
  theme:undefined | string 
  setTheme:(v:string | undefined)=>void
} 
import { createContext, useState } from "react"

export const ThemeContext = createContext<TProvider>({
  theme:undefined ,
  setTheme : ()=>{}  
})
function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme , setTheme] = useState<undefined | string>('' )
  return (
    <>
      <ThemeContext.Provider value={{ theme , setTheme }}>{children}</ThemeContext.Provider>
    </>
  )
}

export default ThemeProvider