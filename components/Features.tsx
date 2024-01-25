export default function Features() {
  return (
    <section id="features">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="text-3xl mb-4 font-semibold font-heading text-muted-foreground">Your workflow will never be interupted again</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center bg-card rounded-xl h-80 pt-12" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-primary" width="64" height="64" rx="32" />
                <path className="stroke-current text-primary-foreground" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-primary-foreground/80" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg>
              <h4 className="text-xl mb-2 font-heading">Seamless Note-Taking</h4>
              <p className="text-sm text-gray-400 text-center w-2/3">Effortlessly open floating notes with a simple shortcut, Ctrl + L, and immediately start jotting down your thoughts without disrupting your workflow.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center bg-card rounded-xl h-80 pt-12" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-primary" cx="32" cy="32" r="32" />
                <path className="stroke-current text-primary-foreground" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-primary-foreground/80" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="text-xl mb-2 font-heading">Elevate Your Note-Taking</h4>
              <p className="text-gray-400 text-sm text-center w-2/3">Enhance your productivity and creativity with Flowplane's innovative text editor, seamlessly integrated into the app's functionality.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center bg-card rounded-xl h-80 pt-12" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-primary" width="64" height="64" rx="32" />
                <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <ellipse className="stroke-current text-primary-foreground/80" cx="11" cy="11" rx="5.5" ry="11" />
                  <path className="stroke-current text-primary-foreground" d="M11 0v22M0 11h22" />
                  <circle className="stroke-current text-primary-foreground" cx="11" cy="11" r="11" />
                </g>
              </svg>
              <h4 className="text-xl mb-2 font-heading">Rust-Powered Efficiency</h4>
              <p className=" text-gray-400 text-center text-sm w-2/3">Built with Rust, Flowplane ensures top-notch performance and reliability. </p>
            </div>

            

          </div>

        </div>
      </div>
    </section>
  )
}
