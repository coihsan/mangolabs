'use client'
import React, {useState, useEffect} from 'react'
import { NAV_LINK } from "@/app/constants/index"; 
import Link from 'next/link'
 const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDrawer = () => {
    setIsOpen(!isOpen);
  };
    return (
        <div className='relative w-[30px] h-[30px] flexCenter'>
            <input type="checkbox" name="" id="" onClick={handleDrawer} className='w-[30px] h-[30px] cursor-pointer z-10 opacity-[0]'/>
            <div className="absolute right-0 flex flex-col justify-between w-[30px] h-[10px]">
                <span className="h-[3px] w-full bg-red-500"></span>
                <span className="h-[3px] w-full bg-red-500"></span>
            </div>
        </div>
    )
}

export const NavbarResp = () =>{
    const [isOpen, setIsOpen] = useState(false);


    
      useEffect(() => {
        const handleEscKeyPress = (e: React.KeyboardEvent | KeyboardEvent) => {
          if (e.keyCode === 27 && isOpen) {
            setIsOpen(false);
          }
        };
      
    
        if (isOpen) {
          document.body.style.setProperty("overflow", "hidden");
        } else {
          document.body.style.removeProperty("overflow");
        }
    
        document.addEventListener("keydown", handleEscKeyPress);
    
        return () => {
          document.removeEventListener("keydown", handleEscKeyPress);
        };
      }, [isOpen]);

    return(
        <div className='absolute top-0 mx-auto w-full max-[600px]:fixed max-[600px]:bg-black/10 max-[600px]:backdro-blur-xl z-50'>
          <div className="mx-auto flex items-center justify-between max-[600px]:w-full  max-w-screen-xl px-4 py-12 max-[600px]:py-4">
          <Link href="#" className="">
            Mango Labs
          </Link>
          <div className="hidden flex-nowrap max-[600px]:w-full lg:flex items-center transition-all h-full">
            <div className="p-3">
              {NAV_LINK.map((link) =>(
                  <Link className="align-baseline hover:bg-indigo-950 hover:text-indigo-400 hover:font-bold transition-all duration-300 ease-in-out px-4 py-2 hover:rounded-full" href={link.href} key={link.key}>{link.label}</Link>
                ))}
            </div>
            <HamburgerMenu />
          </div>
        </div>
        </div>
    )
}
export default NavbarResp;
export { HamburgerMenu };
