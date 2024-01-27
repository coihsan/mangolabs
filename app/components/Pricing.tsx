import Image from "next/image";
import { servicesData } from "@/app/constants/index";
import Link from "next/link";
import { inView } from "framer-motion";
export default function Services() {
  return (
    <section className="bgGrid w-full h-full">
      <div className="containers max-w-screen-xl ">
        <div className="py-[10rem] max-[600px]:py-[5rem] w-[100%]">
          <div className="flexColCenter gap-2 mb-[4rem]">
            <h1 className="font-bold textTitle title-style">Pricing.</h1>
          </div>
          <div className="grid grid-cols-3 w-[100%] max-[600px]:grid-cols-1 gap-5 ">
            {servicesData.map((servicesData) => (
              <Link
                href={servicesData.url}
                key={servicesData.id}
                className="relative  group flex flex-col bg-gradient-to-tl from-zinc-900 to-transparent border border-sky-500/40 hover:from-sky-950 hover:border-sky-500 backdrop-blur-sm drop-shadow-lg shadow-lime-600 rounded-xl transition-all ease-linear duration-150"
              >
                <div className="p-8 transition-transform duration-100 ease-in-out">
                  <h2 className="text-[2rem] font-bold pb-[1rem] leading-none title-style tracking-wide">
                    {servicesData.title}
                  </h2>
                  <h4 className="text-normal text-xl text-zinc-400">
                    {servicesData.subtitle}
                  </h4>
                  <h5 className="px-4 my-3 py-1 rounded-full bg-zinc-100/10 w-max text-yellow-500 font-semibold">
                    {servicesData.pricing}
                  </h5>
                  <p className="text-zinc-400">{servicesData.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
