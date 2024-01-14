import Link from "next/link"
import { buttonVariants } from "./ui/button"

export default function Download() {
  return (
    <section id="download">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-6 md:py-12 flex justify-around">
        <div data-aos="fade-up" data-aos-delay="400">
              <Link href="#download" className={buttonVariants({ size: "lg" })}>Download for Windows</Link>
              </div>
              <div data-aos="fade-up" data-aos-delay="400">
              <Link href="#download" className={buttonVariants({ size: "lg" })}>Download for MacOS</Link>
              </div>
              <div data-aos="fade-up" data-aos-delay="400">
              <Link href="#download" className={buttonVariants({ size: "lg" })}>Download for Linux</Link>
              </div>
        </div>
      </div>
    </section>
  )
}
