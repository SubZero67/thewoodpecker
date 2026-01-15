import heroImg from "../assets/images/hero.jpg"

function Home() {
  return (
    <section
      className="min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="w-full h-full bg-black/40">
        <div className="max-w-7xl mx-auto px-8 py-40 text-white">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight mb-6">
  Thoughtfully crafted <br />
  <span className="font-semibold">interiors</span> by <br />
  Thewoodpecker
</h1>


          <p className="text-gray-200 max-w-md mb-10">
            We design elegant, functional spaces using natural materials,
            refined details, and timeless aesthetics.
          </p>

          <a
            href="#projects"
            className="inline-block px-8 py-3 border border-white
                       text-sm tracking-wide hover:bg-white
                       hover:text-black transition"
          >
            View Projects
          </a>

        </div>
      </div>
    </section>
  )
}

export default Home
