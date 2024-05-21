'use client'

import Link from 'next/link'
import Portal from './portal/Portal'
import { Button, buttonVariants } from "@/components/ui/button"
import dynamic from 'next/dynamic'
import { BackgroundBeams } from './ui/background-beams'
import { HeroHighlight, Highlight } from './ui/hero-highlight'
import { motion } from 'framer-motion'
const DownloadButton = dynamic(() => import('./Download'), { ssr: false })

export default function Hero() {

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Illustration behind hero content */}
        <div className="absolute left-0 bottom-0 right-0 from-primary/30 hidden lg:block pointer-events-none bg-gradient-to-t to-primary/0 rounded-3xl w-full h-screen" aria-hidden="true" data-aos="fade-up" data-aos-delay="400">
        </div>

        {/* Hero content */}
        <div className="relative pt-16 pb-10 md:pt-24 md:pb-16 z-10">
          {/* Section header */}
          <div className="max-w-3xl mx-auto flex items-center flex-col text-center mb-12 ">
            <div className='py-1 text-muted-foreground px-6 text-sm mb-6 rounded-3xl bg-primary/20 border border-dashed border-primary'>
              Launching Soon
            </div>
            <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-3xl px-4 lg:text-[4.2rem] font-heading font-bold  max-w-4xl leading-normal text-center mx-auto text-neutral-600 "
      >
          Thoughts <Highlight> captured </Highlight>
           
            Flow <Highlight>unlocked</Highlight>
            </motion.h1>
            <p className="text-muted-foreground mt-4 mb-6 w-3/5 text-sm md:text-base" data-aos="fade-up" data-aos-delay="200">With floating notes, experience note-taking that seamlessly integrates into your workflow.</p>

            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center sm:space-x-2 space-y-2 sm:space-y-0 ">
              <div data-aos="fade-up" data-aos-delay="400" className='z-10'>
        <DownloadButton/>
              </div>
              <div data-aos="fade-up" data-aos-delay="600" className='z-10'>
            <Link href="#features" className={buttonVariants({  variant: "secondary",size: "lg" })}>Learn more</Link>
              </div>
            </div>
            <Button data-aos="fade-up"  data-aos-delay="600" variant="link" className="text-neutral-400 z-10 mt-2" asChild><Link href="#footer">Not your OS?</Link></Button>
          </div>

          <div>
            <div className="relative flex justify-center items-center" data-aos="flip-up" data-aos-delay="300" data-aos-duration="1500">
              <Portal/>
            </div>
          </div>

        </div>

      </div>
      <BackgroundBeams/>
    </section>
  )
}
