import Button from '@/app/somecomponents/Button'
import { motion } from "framer-motion"
import Link from 'next/link'
export default function Hero(){
    return (
        <div className="containers max-w-screen-xl h-[100vh] w-full flexCenter">
            <div className="flexColCenter gap-6">
                <motion.h1 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center text-[5rem] max-[600px]:text-[2.5rem] font-bold sm:leading-none leading-[0.8]">We build brands, <br /> we create experiences.</motion.h1>
                <p className="m-auto text-center lg:text-[1.2rem] max-w-screen-md mt-[1rem] tex-neutral-300">We're a full-service digital marketing and web development agency that specializes in building brands and creating experiences</p>
                <div className='flex items-center gap-3'>
                    <Link href="#" className="btn-primary btn-rules box-shadow-hover">Get Started</Link>
                    <Link href="#" className="">Our Projects</Link>
                </div>
            </div>
        </div>
    )
}