import Image from 'next/image'
import Link from 'next/link'
import { meetteam } from '../constants'

export default function MeetTeam(){
    return (
        <section className="containers max-w-screen-xl">
            <div className="py-[10rem] max-[600px]:py-[5rem] w-[100%]">
                <div className="flexColCenter gap-2 mb-[7rem]">
                    <h1 className="text-7xl max-[600px]:text-3xl font-bold title-style">Meet Our Team.</h1>
                    <p className="max-[600px]:text-center text-zinc-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="">
                    <div className='flexCenter gap-3 max-[600px]:overflow-scroll'>
                        {meetteam.map((meetteam) =>(
                            <div key={meetteam.id} className='group relative overflow-hidden w-[300px] h-[400px] rounded-md flexColCenter transition-all ease-linear group-hover:grayscale'>
                                <Image className='w-[300px] h-[400px] hover:filter-none object-cover' src={meetteam.images} width={300} height={300} alt='image' />
                                <div className="hidden absolute bottom-0 left-0 z-10 group-hover:block bg-rose-50 w-full h-[30%] rounded-md transition-all ease-linear">
                                    <h2>{meetteam.name}</h2>
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
