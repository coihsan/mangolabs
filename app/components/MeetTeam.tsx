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
                                <Image className='w-[300px] h-[400px] hover:filter-none object-cover object-top group-hover:scale-[1.09] transition-all ease-linear duration-700 grayscale' src={meetteam.images} width={300} height={300} alt='image' />
                                <div className="translate-y-[150%] absolute bottom-0 opacity-0 left-0 z-10 group-hover:opacity-100 group-hover:translate-y-[0%] bg-zinc-900/80 w-full h-[30%] flexColCenter transition-all ease-linear duration-500">
                                    <h2 className="text-2xl">{meetteam.name}</h2>
                                    <p>{meetteam.position}</p>
                                    <a href={meetteam.contact}>Call me</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
