import Image from "next/image";
import {servicesData} from "@/app/constants/index";
import Link from 'next/link'
import { inView } from "framer-motion"
export default function Services(){
    return(
        <section className="containers max-w-screen-xl ">
            <div className="py-[10rem] w-[100%]">
                <div className="flexColCenter">
                    <h1 className="text-5xl font-bold title-style">Our Specialisation.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="grid w-[100%]">
                    {servicesData.map((servicesData) =>(
                        <div className="flex items-start justify-between gap-3 py-[10rem]  ">
                            <div className="max-w-xl flex flex-col">
                                <div className="fill-neutral-50 text-[3rem]">{servicesData.icon}</div>
                                <h2 className="text-[2rem] font-bold py-[1rem] leading-none title-style tracking-wide">{servicesData.title}</h2>
                                <p>{servicesData.desc}</p>
                                <Link className="flex items-center gap-2 px-5 py-3 rounded-full font-medium border border-zinc-300/30 bg-gradient-to-r from-indigo-600 to-sky-600 mt-[2rem] w-max" href={servicesData.url}>
                                    <Image src={'/star1.svg'} width={20} height={20} alt="star" className="fill-white" />
                                    Readmore to detail 
                                </Link>
                            </div>
                            <Image className="" src={'/imageblank.png'} width={500} height={300} alt="imageblank"/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}