import Link from 'next/link'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4 mt-3">
            {/* Logo */}
            <Link href="/" className="block font-heading text-xl" aria-label="Flowplane">
              Flowplane
            </Link>
          </div>

        </div>
      </div>
    </header>
  )
}
