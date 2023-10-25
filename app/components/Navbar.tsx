'use client'
import React from "react";

import { NAV_LINK } from "../constants/index.ts"; 
import Link from "next/link";
export default function Navbar (){
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
       
      <nav className="m-auto w-full p-[1rem]">
        <div className="sticky top-2 left-0 m-auto flex items-center justify-between w-full max-w-screen-md backdrop-blur-xl bg-gradient-to-r rounded-lg from-neutral-950 to-neutral-900 border border-neutral-800 p-4">
          <Link href="#" className="">
            Mango Labs
          </Link>
          <div className="flex items-center transition-all">
            {NAV_LINK.map((link) =>(
                <Link className="align-baseline hover:bg-neutral-800 px-6 py-1 hover:rounded-full" href={link.href} key={link.key}>{link.label}</Link>
              ))}
          </div>
        </div>
      </nav>
    
    )
}