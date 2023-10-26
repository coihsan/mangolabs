import Image from "next/image";
import {servicesData} from "@/app/constants/index";
import Link from 'next/link'
export default function Services(){
    return(
        <section className="containers max-w-screen-xl">
            <h1 className="text-5xl font-bold">Our Specialisation.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <div className="grid grid-cols-3 gap-3 max-[600px]:grid-cols-1 ">
                {servicesData.map((servicesData) =>(
                    <div className="flex items-center flex-col gap-3 bg-gradient-to-br from-transparent to-slate-900 p-8 rounded-lg border border-slate-800" key={servicesData.id}>
                        <div className="fill-neutral-50 text-[3rem]">{servicesData.icon}</div>
                        <h2 className="text-[2rem] font-bold leading-none">{servicesData.title}</h2>
                        <p>{servicesData.desc}</p>
                        <Link className="" href={servicesData.url}>Readmore</Link>
                    </div>
                ))}
            </div>
        </section>
    )
}