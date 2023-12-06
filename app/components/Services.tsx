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
            <h1 className="font-bold textTitle title-style">
              Our Specialisation.
            </h1>
            <p className="max-[600px]:text-center text-zinc-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="grid grid-cols-3 w-[100%] max-[600px]:grid-cols-1 gap-5 ">
            {servicesData.map((servicesData) => (
              <div key={servicesData.id} className="relative">
                <Image
                  className="object-cover "
                  src={servicesData.imageSrc}
                  width={500}
                  height={300}
                  alt="image"
                />
                <h2 className="absolute left-5 bottom-0 text-[2rem] font-bold pb-[1rem] leading-none title-style tracking-wide">
                  {servicesData.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
