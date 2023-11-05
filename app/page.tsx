import Image from 'next/image'
import Hero from './components/Hero'
import Services from './components/Services'

import { MotionConfig, motion } from "framer-motion"


export default function Home() {
  return (
    <main className="">
      <section className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-neutral-950 to-transparent">
        <Hero />
      </section>
      <Services />
    </main>
  )
}
