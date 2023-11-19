import Image from 'next/image'
import Hero from './components/Hero'
import Services from './components/Services'
import Banner1 from './components/banner-1'

import { MotionConfig, motion } from "framer-motion"
import MeetTeam from './components/MeetTeam'


export default function Home() {
  return (
    <main className="">
      <section className="bg-[url('/butterfly.webp')] bg-fixed bg-center bg-cover max-[600px]:bg-rigth bg-origin-padding">
        <Hero />
      </section>
      <Services />
      <MeetTeam />
      <Banner1 />
    </main>
  )
}
