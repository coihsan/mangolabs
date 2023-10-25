import Button from '@/app/somecomponents/Button'
export default function Hero(){
    return (
        <div className="containers max-w-screen-xl h-[100vh] w-full flex flex-col justify-center items-center">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-center text-[6rem] max-[600px]:text-[2.5rem] font-bold sm:leading-none leading-[0.8]">We build brands, <br /> we create experiences.</h1>
                <p className="m-auto text-center lg:text-[1.2rem] max-w-screen-md mt-[1rem] tex-neutral-300">We're a full-service digital marketing and web development agency that specializes in building brands and creating experiences</p>
                <div className='flex gap-3'>
                    <a href="#" className="bg-gradient-to-br from-transparent to-slate-800 p-5 border border-slate-600 rounded-full">Get Started</a>
                    <a href="#" className="bg-gradient-to-br from-transparent to-slate-800 p-5 border border-slate-600 rounded-full">Our Projects</a>
                </div>
            </div>
        </div>
    )
}