import Button from '@/app/somecomponents/Button'
import Link from 'next/link'
export default function Hero(){
    return (
        <div className="containers max-w-screen-xl h-[100vh] w-full flexCenter">
            <div className="flexColCenter gap-6">
                <h1 className="text-center text-[6rem] max-[600px]:text-[2.5rem] font-bold sm:leading-none leading-[0.8]">We build brands, <br /> we create experiences.</h1>
                <p className="m-auto text-center lg:text-[1.2rem] max-w-screen-md mt-[1rem] tex-neutral-300">We're a full-service digital marketing and web development agency that specializes in building brands and creating experiences</p>
                <div className='flex items-center gap-3'>
                    <Link href="#" className="btn-primary btn-rules box-shadow-hover">Get Starte</Link>
                    <Link href="#" className="">Our Projects</Link>
                </div>
            </div>
        </div>
    )
}