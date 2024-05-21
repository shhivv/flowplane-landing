"use client"

import { motion } from "framer-motion"
import { LampContainer } from "./ui/lamp"
import { WobbleCard } from "./ui/wobble-card"

export default function Features() {
  return (
    <section id="features" className="flex items-center flex-col">
          <LampContainer className="bg-transparent">
          <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-neutral-300 to-neutral-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent"
      >
        Your workflow will
        <br/>
         never be interrupted again
      </motion.h1>
      </LampContainer>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-2/3 ">


      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-orange-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Seamless Note-Taking
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          Effortlessly open floating notes with a simple shortcut, Ctrl + Q, and immediately start jotting down your thoughts without disrupting your workflow.
          </p>
        </div>

      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-orange-700">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Rust-Powered Efficiency
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Built with Rust, Flowplane ensures top-notch performance and reliability.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-orange-800 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Elevate Your Note-Taking
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Enhance your productivity and creativity with Flowplane's innovative text editor, seamlessly integrated into the app's functionality.
          </p>
        </div>
        
      </WobbleCard>
    </div>
      
     
    </section>
  )
}
