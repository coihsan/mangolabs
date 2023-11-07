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
        <div className='relative w-[30px] h-[30px] hidden max-[600px]:flexCenter'>
            <input type="checkbox" name="" id="" onClick={handleDrawer} className='checkbox w-[30px] h-[30px] cursor-pointer z-10 opacity-[0]'/>
            <div className="hamburger absolute right-0 flex flex-col justify-between w-[30px] h-[13px]">
                <span className="line1 h-[2px] w-full bg-zinc-50 rounded-full"></span>
                <span className="line2 h-[2px] w-full bg-zinc-50 rounded-full"></span>
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
        <div className='absolute top-5 max-[600px]:top-2 mx-auto w-full max-[600px]:fixed  z-50 max-[600px]:px-4'>
          <div className="mx-auto flex items-center justify-between max-[600px]:w-full  max-w-screen-xl px-4 max-[600px]:py-4 rounded-md border border-zinc-50/40 max-[600px]:bg-black/30 max-[600px]:backdrop-blur-xl">
          <Link href="#" className="title-style text-[1.2rem]">
            Mango Labs
          </Link>
          <div className="hidden flex-nowrap max-[600px]:w-full lg:flex items-center transition-all h-full">
            <div className=" lg:flex p-3">
              {NAV_LINK.map((link) =>(
                  <Link className="align-baseline font-medium hover:bg-indigo-950 hover:text-indigo-50 hover:font-bold transition-all duration-300 ease-in-out px-4 py-2 hover:rounded-full" href={link.href} key={link.key}>{link.label}</Link>
                ))}
            </div>
          </div>
            <HamburgerMenu />
        </div>
        </div>
    )
}
export default NavbarResp;
export { HamburgerMenu };
