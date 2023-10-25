'use client'
import React from "react";

import { NAV_LINK } from "../constants/index.ts"; 
import Link from "next/link";
export default function Navbar (){
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
       
      <nav>
        <div className="flex">
          {NAV_LINK.map((link) =>(
              <Link href={link.href} key={link.key}>{link.label}</Link>
            ))}
        </div>
      </nav>
    
    )
}