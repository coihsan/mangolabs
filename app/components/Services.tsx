import Image from "next/image";
import {servicesData} from "@/app/constants/index";
import Link from 'next/link'
import { inView } from "framer-motion"
export default function Services(){
    return(
        <section className="bgGrid w-full h-full">
            <div className="containers max-w-screen-xl ">
            <div className="py-[10rem] max-[600px]:py-[5rem] w-[100%]">
                <div className="flexColCenter gap-2 mb-[7rem]">
                    <h1 className=" font-bold title-style">Our Specialisation.</h1>
                    <p className="max-[600px]:text-center text-zinc-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="grid grid-cols-2 w-[100%] max-[600px]:grid-cols-1 gap-5 ">
                    {servicesData.map((servicesData) =>(
                        <div key={servicesData.id} className="flex flex-col bg-zinc-900 p-8 rounded-xl">
                            <h2 className="text-[2rem] font-bold py-[1rem] leading-none title-style tracking-wide">{servicesData.title}</h2>
                            <p className="text-zinc-300">{servicesData.desc}</p>
                            <Link className="flex items-center gap-2 px-5 py-2 max-[600px]:px-4 max-[600px]:py-2 rounded-full font-medium border hover:border-zinc-300/30 hover:bg-gradient-to-r transition-all ease-in-out duration-500 hover:from-indigo-600 hover:to-sky-600 bg-zinc-700/30 mt-[2rem] w-max" href={servicesData.url}>
                                <Image src={'/star1.svg'} width={20} height={20} alt="star" className="fill-white" />
                                    Readmore
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </section>
    )
}
