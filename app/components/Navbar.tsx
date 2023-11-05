"use client"
import React, { useState } from "react"

import { NAV_LINK } from "@/app/constants/index"; 
import Link from "next/link";
export default function Navbar (){
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
       
      <nav className="absolute top-0 mx-auto w-full max-[600px]:fixed max-[600px]:bg-black/10 max-[600px]:backdro-blur-xl ">
        <div className="mx-auto flex items-center justify-between max-w-screen-xl px-4 py-12 max-[600px]:py-4">
          <Link href="#" className="">
            Mango Labs
          </Link>
          <div className="hidden lg:flex items-center transition-all">
            <div>
              {NAV_LINK.map((link) =>(
                  <Link className="align-baseline hover:bg-indigo-800 transition-all duration-300 ease-in-out px-4 py-1 hover:rounded-full" href={link.href} key={link.key}>{link.label}</Link>
                ))}
            </div>
          </div>
        </div>
      </nav>
    
    )
}