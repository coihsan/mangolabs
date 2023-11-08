import Image from 'next/image'
import Link from 'next/link'
import { meetteam } from '../constants'

export default function MeetTeam(){
    return (
        <section className="containers max-w-screen-xl">
            <div className="py-[10rem] max-[600px]:py-[5rem] w-[100%]">
                <h1 className="text-5xl title-style text-center">Meet Our Team</h1>
                <div className="">
                    <div className='flexCenter gap-3 max-[600px]:overflow-scroll'>
                        {meetteam.map((meetteam) =>(
                            <div className='overflow-hidden w-[300px] h-[400px] rounded-md bg-rose-500'>
                                <Image className='w-[300px] h-[400px] ' src={meetteam.images} width={300} height={300} alt='image' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
