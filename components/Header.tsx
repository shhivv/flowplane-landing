import Link from 'next/link'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Flowplane">
              
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

        </div>
      </div>
    </header>
  )
}
