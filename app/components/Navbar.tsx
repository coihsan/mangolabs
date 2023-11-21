"use client"
import React, { useState } from "react"
import {motion} from 'framer-motion'
import { NAV_LINK } from "@/app/constants/index"; 
import Link from "next/link";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}
  
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}


export default function Navbar (){
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
       
      <nav className="absolute top-0 mx-auto w-full max-[600px]:fixed max-[600px]:bg-black/10 max-[600px]:backdro-blur-xl ">
        <div className="mx-auto flex items-center justify-between max-[600px]:w-full  max-w-screen-xl px-4 py-12 max-[600px]:py-4">
          <div className="flex items-center gap-3">
            <Link href="#">Mango Labs</Link>
          <motion.div 
          className="hidden flex-nowrap max-[600px]:w-full lg:flex items-center transition-all h-full">
            <motion.div className="p-3">
              {NAV_LINK.map((link) =>(
                  <Link className="align-baseline hover:bg-indigo-950 hover:text-indigo-400 hover:font-bold transition-all duration-300 ease-in-out px-4 py-2 hover:rounded-full" href={link.href} key={link.key}>{link.label}</Link>
                ))}
            </motion.div>
          </motion.div>
          </div>
          <div>
            <h2>Contact Us</h2>
          </div>
        </div>
      </nav>
    
    )
}
