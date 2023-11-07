'use client'

import Button from '@/app/somecomponents/Button'
import { motion } from "framer-motion"
import Link from 'next/link'

const items = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1
    }
  }

export default function Hero(){
    return (
        <div className="containers max-w-screen-xl h-[100vh] w-full flexCenter">
            <div className="flexColCenter">
                <div className='px-4 py-1 mb-[1rem] rounded-full bg-indigo-500/20'>
                    <span>Digital Agency from West Jakarta 🇮🇩</span>
                </div>
                <motion.h1 
                variants={items}
                initial="hidden"
                animate="show"
                className="text-center text-[4.5rem] max-[600px]:text-[2.5rem] font-bold sm:leading-none leading-[0.8] title-style">We build brands, <br /> we create experiences.</motion.h1>
                <motion.p 
                variants={items}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.6 }}
                className="m-auto text-center lg:text-[1.2rem] max-w-screen-md mt-[1rem] tex-neutral-300">We're a full-service digital marketing and web development agency that specializes in building brands and creating experiences</motion.p>
                <div className='grid grid-cols-2 justify-center items-center gap-3 pt-[2rem] max-[600px]:grid-cols-1 max-[600px]:w-full'>
                    <Link href="#" className="text-center btn-primary btn-rules box-shadow-hover bg-gradient-to-r from-sky-500 to-pink-500">Our Projects</Link>
                    <Link href="#" className="text-center btn-primary btn-rules box-shadow-hover bg-slate-500">Meet our team</Link>
                </div>
                
            </div>
        </div>
    )
}