import { useEffect, useState } from "react"

import about1 from "../assets/images/about/about1.jpg"
import about2 from "../assets/images/about/about2.jpg"
import about3 from "../assets/images/about/about3.jpg"
import about4 from "../assets/images/about/about4.jpg"
import about5 from "../assets/images/about/about5.jpg"

function About() {
  const images = [about1, about2, about3, about4, about5]
  const [current, setCurrent] = useState(0)

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section
  id="about"
  className="py-32 bg-gradient-to-b from-[#f5f3ef] to-white"
>

      <div className="max-w-5xl mx-auto px-4 sm:px-8">

        <h2 className="text-5xl font-light mb-16">
          About <span className="font-semibold">Thewoodpecker</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Slideshow */}
          <div className="relative w-full max-w-sm mx-auto h-[420px] overflow-hidden 
                rounded-2xl shadow-2xl border border-black/10 bg-white">

            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 
            scale-105 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}

              />
            ))}
            <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>

          </div>

          {/* Text */}
          <div className="text-gray-700">
            <p className="mb-6">
              Thewoodpecker is an interior design studio focused on creating
              thoughtful, elegant spaces that balance aesthetics with
              functionality.
            </p>

            <p className="mb-8">
              Our work is inspired by natural materials, refined details,
              and an understanding of how people experience space.
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
