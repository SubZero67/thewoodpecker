function Contact() {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center">

        <h2 className="text-5xl font-light mb-8">
          Let’s <span className="font-semibold">Connect</span>
        </h2>

        <p className="text-gray-600 mb-12">
          Have a project in mind? Let’s discuss how we can design your space.
        </p>

        <div className="flex flex-col gap-6 items-center">
          <a
            href="https://wa.me/8123206665?text=Hi%20I%20am%20interested%20in%20your%20interior%20design%20services"
            className="px-10 py-4 border border-black text-sm tracking-wide
                       hover:bg-black hover:text-white transition"
          >
            Chat on WhatsApp
          </a>
          <a
  href="mailto:Thewoodpeckerinterio@gmail.com"
  className="text-gray-500 hover:text-black transition"
>
  Thewoodpeckerinterio@gmail.com
</a>


          <a
            href="https://www.instagram.com/thewoodpeckerig?igsh=MTduZXZjM2c2aHUycw=="
            className="text-gray-500 hover:text-black transition"
          >
            Visit Instagram Profile
          </a>
        </div>

      </div>
    </section>
  )
}

export default Contact
