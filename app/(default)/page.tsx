export const metadata = {
  title: 'Flowplane',
  description: 'Streamline your note-taking experience. With its unique feature of floating notes, it allows you to create windows for note-taking that seamlessly integrate into your workflow.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
    </>
  )
}
