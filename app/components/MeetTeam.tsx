import Image from 'next/image'
import Link from 'next/link'
import { meetteam } from '../constants'

export default function MeetTeam(){
    return (
        <section className="containers max-w-screen-xl">
            <div className="py-[10rem] max-[600px]:py-[5rem] w-[100%]">
                <div className="flexColCenter gap-2 mb-[4rem]">
                    <h1 className="textTitle font-bold title-style">Meet Our Team.</h1>
                    <p className="max-[600px]:text-center text-zinc-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="">
                    <div className='flexCenter gap-5 max-[600px]:overflow-scroll'>
                        {meetteam.map((meetteam) =>(
                            <div key={meetteam.id} className='group group-hover/team:filter-none relative overflow-hidden w-[300px] h-[400px] rounded-md flexColCenter transition-all ease-linear'>
                                    <Image className='max-[600px]:w-full w-[300px] h-[400px] hover:filter-none object-cover object-top group-hover:scale-[1.09] transition-all ease-linear duration-700 grayscale' src={meetteam.images} width={300} height={300} alt='image' />
                                <div className="translate-y-[150%] group-hover:filter-none absolute bottom-0 opacity-0 left-0 z-10 group-hover:opacity-100 group-hover:translate-y-[0%] bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent w-full h-[50%] flexColCenter transition-all ease-in-out duration-300">
                                    <h2 className="text-[2rem] leading-none delay-150 ">{meetteam.name}</h2>
                                    <p className="delay-300">{meetteam.position}</p>
                                    <a className="px-4 py-1 mt-[10px] rounded-full bg-white text-black" href={meetteam.contact}>Call me</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
