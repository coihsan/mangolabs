import Image from "next/image";
import {servicesData} from "../constants/index.tsx";
export default function Services(){
    return(
        <section className="containers max-w-screen-xl">
            <h1 className="text-5xl">Our specialisation.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <div className="grid grid-cols-3 max-[600px]:grid-cols-1">
                {servicesData.map((servicesData) =>(
                    <div className="flex items-center flex-col">
                        <div>{servicesData.icon}</div>
                        <h2>{servicesData.title}</h2>
                        <p>{servicesData.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}