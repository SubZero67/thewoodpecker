import aboutImg from "../assets/images/about/about.jpg"

function About() {
  return (
    <section
      id="about"
      className="py-32 bg-gradient-to-b from-[#f5f3ef] to-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8">

        <h2 className="text-5xl font-light mb-16">
          About <span className="font-semibold">Thewoodpecker</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center text-gray-700">

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm h-[420px] overflow-hidden 
                            rounded-2xl shadow-2xl border border-black/10 bg-white">
              <img
                src={aboutImg}
                alt="About Thewoodpecker"
                loading="lazy"
                className="w-full h-full object-cover scale-105"
              />
              {/* Soft overlay */}
              <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="mb-6">
              Thewoodpecker is an interior design studio focused on creating
              thoughtful, elegant spaces that balance aesthetics with
              functionality. We believe interiors should feel personal,
              timeless, and effortless.
            </p>

            <p className="mb-8">
              Inspired by natural materials, clean lines, and refined details,
              our approach is rooted in understanding how people live, move,
              and feel within a space.
            </p>

            <h3 className="text-lg font-medium mb-4 text-black">
              Our Design Philosophy
            </h3>

            <ul className="space-y-3">
              <li>• Timeless over trendy</li>
              <li>• Function before decoration</li>
              <li>• Natural materials & textures</li>
              <li>• Attention to detail</li>
              <li>• Spaces that feel like home</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
