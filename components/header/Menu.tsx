'use client'
import { forwardRef, useState } from "react"
import styles from "./styles.module.css"

const Menu = ({ onClicked, isOpen }: { onClicked: () => void, isOpen: boolean }) => {

    return (
        <button onClick={()=>onClicked()} className="relative w-6 h-6 mr-[auto] md:hidden">
            <span
                className={`block absolute h-0.5 w-full bg-white-color transform transition duration-300 ease-in-out
                ${isOpen ? "rotate-45 top-2.5" : "top-1"}`}
                      />
                      <span
                          className={`block absolute h-0.5 w-full bg-white-color transform transition duration-300 ease-in-out
                ${isOpen ? "-rotate-45 top-2.5" : "top-4"}`}
            />
        </button>
    )
}

export default Menu