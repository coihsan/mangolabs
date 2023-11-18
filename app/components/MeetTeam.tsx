import Image from 'next/image'
import Link from 'next/link'
import { meetteam } from '../constants'

export default function MeetTeam(){
    return (
        <section className="containers max-w-screen-xl">
            <div className="py-[10rem] max-[600px]:py-[5rem] w-[100%]">
                <div className="flexColCenter gap-2 mb-[7rem]">
                    <h1 className="textTitle font-bold title-style">Meet Our Team.</h1>
                    <p className="max-[600px]:text-center text-zinc-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="">
                    <div className='flexCenter gap-3 max-[600px]:overflow-scroll'>
                        {meetteam.map((meetteam) =>(
                            <div key={meetteam.id} className='group relative overflow-hidden w-[300px] h-[400px] rounded-md flexColCenter transition-all ease-linear group-hover:grayscale'>
                                <Image className='w-[300px] h-[400px] hover:filter-none object-cover' src={meetteam.images} width={300} height={300} alt='image' />
                                <div className="translate-y-[150%] absolute bottom-0 opacity-0 left-0 z-10 group-hover:opacity-1 group-hover:translate-y-[0%] bg-zinc-900/80 w-full h-[20%] flexColCenter transition-all ease-linear">
                                    <h2 className="text-2xl">{meetteam.name}</h2>
                                    <p>{meetteam.position}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
