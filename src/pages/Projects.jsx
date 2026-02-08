import { useState } from "react"
import { motion } from "framer-motion"
import { useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"


// Normal images (existing)
import living1 from "../assets/images/projects/living1.jpg"
import living2 from "../assets/images/projects/living2.jpg"


import bedroom1 from "../assets/images/projects/bedroom1.jpg"
import bedroom2 from "../assets/images/projects/bedroom2.jpg"
import bedroom3 from "../assets/images/projects/bedroom3.jpg"
import bedroom4 from "../assets/images/projects/bedroom4.jpg"


import kitchen1 from "../assets/images/projects/kitchen1.jpg"
import kitchen2 from "../assets/images/projects/kitchen2.jpg"

// Executions media
import exeImg1 from "../assets/images/media/executions/img1.jpg"
import exeImg2 from "../assets/images/media/executions/img2.jpg"
import exeImg3 from "../assets/images/media/executions/img3.jpg"
import exeImg4 from "../assets/images/media/executions/img4.jpg"
import exeImg5 from "../assets/images/media/executions/img5.jpg"

import exeVid1 from "../assets/images/media/executions/video1.mp4"
import exeVid2 from "../assets/images/media/executions/video2.mp4"
import exeVid3 from "../assets/images/media/executions/video3.mp4"
import exeVid4 from "../assets/images/media/executions/video4.mp4"
import exeVid5 from "../assets/images/media/executions/video5.mp4"

// 3D Models images
import img1 from "../assets/images/media/models3d/img1.jpg"
import img2 from "../assets/images/media/models3d/img2.jpg"
import img3 from "../assets/images/media/models3d/img3.jpg"
import img4 from "../assets/images/media/models3d/img4.jpg"
import img5 from "../assets/images/media/models3d/img5.jpg"
import img6 from "../assets/images/media/models3d/img6.jpg"

import img8 from "../assets/images/media/models3d/img8.jpg"
import img9 from "../assets/images/media/models3d/img9.jpg"
import img10 from "../assets/images/media/models3d/img10.jpg"
import img11 from "../assets/images/media/models3d/img11.jpg"
import img12 from "../assets/images/media/models3d/img12.jpg"
import img13 from "../assets/images/media/models3d/img13.jpg"
import img14 from "../assets/images/media/models3d/img14.jpg"
import img15 from "../assets/images/media/models3d/img15.jpg"
import img16 from "../assets/images/media/models3d/img16.jpg"
import img17 from "../assets/images/media/models3d/img17.jpg"
import img18 from "../assets/images/media/models3d/img18.jpg"
import img19 from "../assets/images/media/models3d/img19.jpg"
import img20 from "../assets/images/media/models3d/img20.jpg"
import img21 from "../assets/images/media/models3d/img21.jpg"
import img22 from "../assets/images/media/models3d/img22.jpg"
function AutoScrollRow({ children }) {

  const scrollRef = useRef(null)
  const animationRef = useRef(null)
  const pausedRef = useRef(false)

  useEffect(() => {

    const container = scrollRef.current
    if (!container) return

    const speed = window.innerWidth < 768 ? 0.3 : 0.6

    const animate = () => {

      if (!pausedRef.current) {

        container.scrollLeft += speed

        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0
        }

      }

      animationRef.current = requestAnimationFrame(animate)

    }

    animationRef.current = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationRef.current)

  }, [])


  // convert vertical wheel → horizontal scroll
  const handleWheel = (e) => {

    const container = scrollRef.current
    if (!container) return

    pausedRef.current = true

    container.scrollLeft += e.deltaY

    setTimeout(() => {
      pausedRef.current = false
    }, 1000)

  }


  const pause = () => pausedRef.current = true

  const resume = () => {
    setTimeout(() => {
      pausedRef.current = false
    }, 1500)
  }


  return (

    <div
      ref={scrollRef}
      className="flex gap-6 overflow-x-auto no-scrollbar w-full px-4 sm:px-8"
      
      style={{
        WebkitOverflowScrolling: "touch",
        scrollBehavior: "smooth"
      }}

      onWheel={handleWheel}

      onMouseEnter={pause}
      onMouseLeave={resume}

      onTouchStart={pause}
      onTouchEnd={resume}

    >
      {children}
    </div>

  )

}






function Projects() {
  const [active, setActive] = useState("All")
  const [selected, setSelected] = useState(null)

  const items = [
    // Living
    { type: "image", src: living1, title: "Living Interior", category: "Living" },
    { type: "image", src: living2, title: "Modern Living", category: "Living" },
    

    // Bedroom
    { type: "image", src: bedroom1, title: "Bedroom Interior", category: "Bedroom" },
    { type: "image", src: bedroom2, title: "Minimal Bedroom", category: "Bedroom" },
    { type: "image", src: bedroom3, title: "Luxury Bedroom", category: "Bedroom" },
    { type: "image", src: bedroom4, title: "Modern Bedroom", category: "Bedroom" },
    

    // Kitchen
    { type: "image", src: kitchen1, title: "Kitchen Design", category: "Kitchen" },
    { type: "image", src: kitchen2, title: "Open Kitchen", category: "Kitchen" },

    // Executions (Images)
    { type: "image", src: exeImg1, title: "Execution Site 1", category: "Executions" },
    { type: "image", src: exeImg2, title: "Execution Site 2", category: "Executions" },
    { type: "image", src: exeImg3, title: "Execution Site 3", category: "Executions" },
    { type: "image", src: exeImg4, title: "Execution Site 4", category: "Executions" },
    { type: "image", src: exeImg5, title: "Execution Site 5", category: "Executions" },

    // Executions (Videos)
    { type: "video", src: exeVid1, title: "Execution Walkthrough 1", category: "Executions" },
    { type: "video", src: exeVid2, title: "Execution Walkthrough 2", category: "Executions" },
    { type: "video", src: exeVid3, title: "Execution Walkthrough 3", category: "Executions" },
    { type: "video", src: exeVid4, title: "Execution Walkthrough 4", category: "Executions" },
    { type: "video", src: exeVid5, title: "Execution Walkthrough 5", category: "Executions" },

    // 3D Models
    { type: "image", src: img1, title: "3D Model 1", category: "3D Models" },
  { type: "image", src: img2, title: "3D Model 2", category: "3D Models" },
  { type: "image", src: img3, title: "3D Model 3", category: "3D Models" },
  { type: "image", src: img4, title: "3D Model 4", category: "3D Models" },
  { type: "image", src: img5, title: "3D Model 5", category: "3D Models" },
  { type: "image", src: img6, title: "3D Model 6", category: "3D Models" },
  { type: "image", src: img8, title: "3D Model 8", category: "3D Models" },
  { type: "image", src: img9, title: "3D Model 9", category: "3D Models" },
  { type: "image", src: img10, title: "3D Model 10", category: "3D Models" },
  { type: "image", src: img11, title: "3D Model 11", category: "3D Models" },
  { type: "image", src: img12, title: "3D Model 12", category: "3D Models" },
  { type: "image", src: img13, title: "3D Model 13", category: "3D Models" },
  { type: "image", src: img14, title: "3D Model 14", category: "3D Models" },
  { type: "image", src: img15, title: "3D Model 15", category: "3D Models" },
  { type: "image", src: img16, title: "3D Model 16", category: "3D Models" },
  { type: "image", src: img17, title: "3D Model 17", category: "3D Models" },
  { type: "image", src: img18, title: "3D Model 18", category: "3D Models" },
  { type: "image", src: img19, title: "3D Model 19", category: "3D Models" },
  { type: "image", src: img20, title: "3D Model 20", category: "3D Models" },
  { type: "image", src: img21, title: "3D Model 21", category: "3D Models" },
  { type: "image", src: img22, title: "3D Model 22", category: "3D Models" },
  ]

 const categories = ["Living", "Bedroom", "Kitchen", "Executions", "3D Models"]

  return (
    <section id="projects" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        <h2 className="text-5xl font-light mb-14">
          Selected <span className="font-semibold">Projects</span>
        </h2>

        {/* Filters */}
        <div className="flex gap-3 mb-12 text-sm flex-wrap">
          {["All", ...categories].map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full border text-xs tracking-wide transition ${
                active === cat
                  ? "bg-black text-white"
                  : "hover:bg-black hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal Galleries */}
        {categories
          .filter(cat => active === "All" || active === cat)
          .map(category => (
            <div key={category} className="mb-20">

              <h3 className="text-2xl font-light mb-6">{category}</h3>

              <AutoScrollRow>

                {items
                  .filter(item => item.category === category)
                  .map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="min-w-[260px] sm:min-w-[300px] md:min-w-[340px]
                                  flex-shrink-0
                                 relative group overflow-hidden cursor-pointer
                                 rounded-xl shadow-lg hover:shadow-2xl transition
                                 snap-center relative group"
                      onClick={() => setSelected(item)}
                    >
                      {item.type === "image" ? (
                        <img
                          loading="lazy"
                          src={item.src}
                          alt={item.title}
                          className="w-full h-[220px] sm:h-[250px] md:h-[280px]
                                     object-cover transition-transform duration-500
                                     group-hover:scale-110"
                        />
                      ) : (
                        <div className="relative">
                          <video
                            src={item.src}
                            preload="metadata"
                            muted
                            className="w-full h-[220px] sm:h-[250px] md:h-[280px]
                                       object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-black/60 text-white px-4 py-2 rounded-full text-sm">
                              ▶ Play
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="absolute inset-0 bg-black/40 opacity-0
                                      group-hover:opacity-100 transition flex items-end">
                        <h4 className="text-white text-sm p-4">
                          {item.title}
                        </h4>
                      </div>
                    </motion.div>
                  ))}

              </AutoScrollRow>
            </div>
          ))}
      </div>

      {/* Fullscreen Viewer */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          {selected.type === "image" ? (
            <img
              src={selected.src}
              alt={selected.title}
              className="max-w-[95%] max-h-[85%]"
            />
          ) : (
            <video
              src={selected.src}
              controls
              autoPlay
              preload="auto"
              className="max-w-[95%] max-h-[85%]"
            />
          )}
        </div>
      )}
    </section>
  )
}

export default Projects
