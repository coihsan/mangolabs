import Image from "next/image";
import {servicesData} from "@/app/constants/index";
import Link from 'next/link'
import { inView } from "framer-motion"
export default function Services(){
    return(
        <section className="bgGrid w-full h-full">
            <div className="containers max-w-screen-xl ">
            <div className="py-[10rem] max-[600px]:py-[5rem] w-[100%]">
                <div className="flexColCenter gap-2 mb-[4rem]">
                    <h1 className="font-bold textTitle title-style">Our Specialisation.</h1>
                    <p className="max-[600px]:text-center text-zinc-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="grid grid-cols-3 w-[100%] max-[600px]:grid-cols-1 gap-5 ">
                    {servicesData.map((servicesData) =>(
                        <Link href={servicesData.url} key={servicesData.id} className="relative group flex flex-col bg-gradient-to-tl from-zinc-900 to-transparent border border-zinc-50/20 hover:from-sky-950 hover:border-sky-500 backdrop-blur-sm p-8 rounded-xl transition-all ease-linear duration-150">
                            <h2 className="text-[2rem] font-bold pb-[1rem] leading-none title-style tracking-wide group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-sky-500 group-hover:via-pink-500 group-hover:to-indigo-500 transition-all ease-linear duration-150">{servicesData.title}</h2>
                            <h4 className="text-normal text-2xl text-zinc-400">{servicesData.subtitle}</h4>
                            <h5 className="px-4 py-1 rounded-full bg-zinc-100/10 w-max text-yellow-500">{servicesData.pricing}</h5>
                            <p className="text-zinc-400">{servicesData.desc}</p>
                            <div className="absolute right-5 bottom-5" >
                                <Image src={'/arrow.svg'} width={20} height={20} alt="star" className="group-hover:rotate-[45deg] transition-all ease-linear duration-150" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
        </section>
    )
}
