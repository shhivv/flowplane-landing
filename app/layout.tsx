import './css/style.css'

import { Nunito, Red_Hat_Display } from 'next/font/google'

import Header from '@/components/Header'
import { cn } from '@/lib/utils'

const inter = Nunito({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ["400"]
})

const lora = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
})

export const metadata = {
  title: 'Flowplane',
  description: 'Streamline your note-taking experience. With its unique feature of floating notes, it allows you to create windows for note-taking that seamlessly integrate into your workflow.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-neutral-200 font-sans antialiased",
          inter.variable, lora.variable
        )}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
 