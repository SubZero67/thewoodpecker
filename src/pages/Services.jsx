function Services() {
  return (
    <section id="services" className="py-32 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        <h2 className="text-5xl font-light mb-16">
          Our <span className="font-semibold">Services</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
          <div>
            <h3 className="text-lg font-medium mb-3">Residential Interiors</h3>
            <p className="text-gray-600">
              Elegant home interiors tailored to your lifestyle and taste.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Modular Kitchens</h3>
            <p className="text-gray-600">
              Functional, modern kitchen designs with premium finishes.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Renovation</h3>
            <p className="text-gray-600">
              Transforming existing spaces into refined modern interiors.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Turnkey Projects</h3>
            <p className="text-gray-600">
              End-to-end design and execution with complete peace of mind.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Services
