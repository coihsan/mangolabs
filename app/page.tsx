import Image from 'next/image'
import Hero from './components/Hero'
import Services from './components/Services'

import { MotionConfig, motion } from "framer-motion"


export default function Home() {
  return (
    <main className="">
      <section className="bg-[url('/butterfly.webp')] bg-fixed bg-center bg-cover max-[600px]:bg-rigth bg-origin-padding">
        <Hero />
      </section>
      <Services />
    </main>
  )
}
