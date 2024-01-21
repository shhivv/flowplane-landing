import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="flowplane">
                <svg width="37" height="51" viewBox="0 0 4096 5698" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2579.09 111.094C2728.63 -38.4431 2972.59 -39.4644 3108.08 122.908C3383.17 452.581 3607.26 822.58 3772.14 1220.63C3985.95 1736.82 4096 2290.07 4096 2848.8C4096 3407.52 3985.95 3960.77 3772.14 4476.96C3607.26 4875.01 3383.17 5245.01 3108.08 5574.68C2972.59 5737.06 2728.63 5736.03 2579.09 5586.5L112.153 3119.56C-37.3844 2970.02 -37.3844 2727.57 112.153 2578.03L2579.09 111.094Z" fill="#4C239F"/>
<path d="M2266.78 442.642C2398.21 311.212 2612.62 310.314 2731.71 453.025C2973.49 742.776 3170.44 1067.97 3315.36 1417.82C3503.28 1871.5 3600 2357.76 3600 2848.82C3600 3339.89 3503.28 3826.14 3315.35 4279.83C3170.44 4629.68 2973.49 4954.87 2731.71 5244.62C2612.62 5387.33 2398.21 5386.43 2266.78 5255L98.5721 3086.8C-32.8574 2955.37 -32.8573 2742.28 98.5721 2610.85L2266.78 442.642Z" fill="#6C31E3"/>
</svg>
                </Link>
              </div>
              <div className="text-gray-400">Flowplane is a note-taking app designed to streamline your note-taking experience. With its unique feature of floating notes, it allows you to create windows for note-taking that seamlessly integrate into your workflow.</div>
            </div>

           
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link href="https://twitter.com/flowplanehq" className="flex justify-center items-center text-primary bg-gray-800 hover:text-gray-100 hover:bg-primary rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="https://github.com/shhivv" className="flex justify-center items-center text-primary bg-gray-800 hover:text-gray-100 hover:bg-primary rounded-full transition duration-150 ease-in-out" aria-label="Github">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; flowplane.shivs.me. All rights reserved.</div>

          </div>

        </div>
      </div>
    </footer>
  )
}
