export const metadata = {
  title: 'Flowplane',
  description: 'Streamline your note-taking experience. With its unique feature of floating notes, it allows you to create windows for note-taking that seamlessly integrate into your workflow.',
}

import Hero from '@/components/Hero'
import Features from '@/components/Features'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
    </>
  )
}
