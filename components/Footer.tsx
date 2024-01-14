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
                <svg width="50" height="15" viewBox="0 0 2500 617" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1902.49 279.637C2036.33 279.637 2139.1 258.126 2210.8 215.105C2287.28 167.304 2366.16 97.9924 2447.42 7.17019L2461.76 0C2471.32 0 2480.88 7.17019 2490.44 21.5106C2500 35.8509 2502.39 47.8012 2497.61 57.3614C2330.31 272.467 2191.68 418.26 2081.74 494.742C1976.58 566.444 1861.85 602.294 1737.57 602.294C1646.75 602.294 1560.71 592.734 1479.45 573.614C1398.18 549.713 1297.8 516.252 1178.3 473.231C1054.02 430.21 948.853 399.14 862.811 380.019C776.769 356.119 685.946 344.168 590.344 344.168C475.621 344.168 387.189 360.899 325.048 394.359C267.686 423.04 212.715 463.671 160.134 516.252C112.333 564.054 76.4818 597.514 52.5813 616.635H45.4111C35.8509 616.635 23.9006 611.855 9.56024 602.294C5.84302e-06 587.954 -2.39006 576.004 2.39005 566.444C274.857 203.155 544.933 21.5106 812.62 21.5106C922.562 21.5106 1085.09 62.1415 1300.19 143.404C1429.25 186.425 1536.81 219.885 1622.85 243.786C1713.67 267.686 1806.88 279.637 1902.49 279.637Z" fill="url(#paint0_linear_481_2)"/>
<defs>
<linearGradient id="paint0_linear_481_2" x1="-299.432" y1="307.955" x2="2898.3" y2="307.955" gradientUnits="userSpaceOnUse">
<stop stopColor="white"/>
<stop offset="1" stopColor="white" stopOpacity="0.7"/>
</linearGradient>
</defs>
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
