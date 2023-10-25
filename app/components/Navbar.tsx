'use client'
import React from "react";

import { NAV_LINK } from "../constants/index.tsx"; 
import Link from "next/link";
export default function Navbar (){
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
       
      <nav className="fixed top-0 mx-auto w-full backdrop-blur-xl bg-black/10 border-b-4 border-indigo-500">
        <div className="mx-auto flex items-center justify-between max-w-screen-xl p-4">
          <Link href="#" className="">
            Mango Labs
          </Link>
          <div className="hidden lg:flex items-center transition-all">
            {NAV_LINK.map((link) =>(
                <Link className="align-baseline hover:bg-neutral-800 px-4 py-1 hover:rounded-full" href={link.href} key={link.key}>{link.label}</Link>
              ))}
          </div>
        </div>
      </nav>
    
    )
}