"use client";
import React, { useState, useEffect } from "react";
import { NAV_LINK } from "@/app/constants/index";
import Link from "next/link";
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative w-[30px] h-[30px] hidden max-[600px]:flexCenter">
      <input
        type="checkbox"
        name=""
        id=""
        onClick={handleDrawer}
        className="checkbox w-[30px] h-[30px] cursor-pointer z-10 opacity-[0]"
      />
      <div className="hamburger absolute right-0 flex flex-col justify-between w-[30px] h-[13px]">
        <span className="line1 h-[2px] w-full bg-zinc-50 rounded-full"></span>
        <span className="line2 h-[2px] w-full bg-zinc-50 rounded-full"></span>
      </div>
    </div>
  );
};

export const NavbarResp = () => {
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

  return (
    <nav className="absolute top-3 mx-auto w-full max-[600px]:fixed  z-50 ">
      <div className="mx-auto flex items-center justify-between max-[600px]:w-full  max-w-screen-xl px-4 max-[600px]:py-4 0 max-[600px]:bg-white/10 max-[600px]:backdrop-blur-xl">
        <div className="flex items-center">
          <Link
            href="#"
            className="title-style text-[1.2rem] max-[470px]:text-[1rem]"
          >
            Mango Labs
          </Link>
          <div className="hidden flex-nowrap max-[600px]:w-full lg:flex items-center transition-all h-full">
            <div className=" lg:flex lg:gap-3 p-3">
              {NAV_LINK.map((link) => (
                <Link
                  className="align-baseline font-medium text-slate-200 hover:text-sky-500 transition-all duration-100 ease-in-out "
                  href={link.href}
                  key={link.key}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <HamburgerMenu />
        <Link className="px-4 py-1 bg-slate-600 rounded-full" href={"#"}>
          (021) 55654432{" "}
        </Link>
      </div>
    </nav>
  );
};
export default NavbarResp;
export { HamburgerMenu };
