import Link from 'next/link'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4 mt-3">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Flowplane">
              
            <svg width="37" height="51" viewBox="0 0 4096 5698" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2579.09 111.094C2728.63 -38.4431 2972.59 -39.4644 3108.08 122.908C3383.17 452.581 3607.26 822.58 3772.14 1220.63C3985.95 1736.82 4096 2290.07 4096 2848.8C4096 3407.52 3985.95 3960.77 3772.14 4476.96C3607.26 4875.01 3383.17 5245.01 3108.08 5574.68C2972.59 5737.06 2728.63 5736.03 2579.09 5586.5L112.153 3119.56C-37.3844 2970.02 -37.3844 2727.57 112.153 2578.03L2579.09 111.094Z" fill="#4C239F"/>
<path d="M2266.78 442.642C2398.21 311.212 2612.62 310.314 2731.71 453.025C2973.49 742.776 3170.44 1067.97 3315.36 1417.82C3503.28 1871.5 3600 2357.76 3600 2848.82C3600 3339.89 3503.28 3826.14 3315.35 4279.83C3170.44 4629.68 2973.49 4954.87 2731.71 5244.62C2612.62 5387.33 2398.21 5386.43 2266.78 5255L98.5721 3086.8C-32.8574 2955.37 -32.8573 2742.28 98.5721 2610.85L2266.78 442.642Z" fill="#6C31E3"/>
</svg>
            </Link>
          </div>

        </div>
      </div>
    </header>
  )
}
