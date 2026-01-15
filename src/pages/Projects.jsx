import { useState } from "react"
import { motion } from "framer-motion"

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
import model1 from "../assets/images/media/models3d/img1.jpg"
import model2 from "../assets/images/media/models3d/img2.jpg"
import model3 from "../assets/images/media/models3d/img3.jpg"
import model4 from "../assets/images/media/models3d/img4.jpg"
import model5 from "../assets/images/media/models3d/img5.jpg"
import model6 from "../assets/images/media/models3d/img6.jpg"

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
    { type: "image", src: model1, title: "3D Model Render 1", category: "3D Models" },
    { type: "image", src: model2, title: "3D Model Render 2", category: "3D Models" },
    { type: "image", src: model3, title: "3D Model Render 3", category: "3D Models" },
    { type: "image", src: model4, title: "3D Model Render 4", category: "3D Models" },
    { type: "image", src: model5, title: "3D Model Render 5", category: "3D Models" },
    { type: "image", src: model6, title: "3D Model Render 6", category: "3D Models" },
  ]

  return (
    <section id="projects" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        <h2 className="text-5xl font-light mb-14">
          Selected <span className="font-semibold">Projects</span>
        </h2>

        {/* Filters */}
        <div className="flex gap-3 mb-12 text-sm flex-wrap">
          {["All", "Living", "Bedroom", "Kitchen", "Executions", "3D Models"].map(cat => (
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {items
            .filter(item => active === "All" || item.category === active)
            .map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden cursor-pointer 
           rounded-xl shadow-lg hover:shadow-2xl transition"

                onClick={() => setSelected(item)}
              >
                {item.type === "image" ? (
  <img
    loading="lazy"
    src={item.src}
    alt={item.title}
    className="w-full h-[240px] sm:h-[280px] md:h-[300px] object-cover 
               transition-transform duration-500 group-hover:scale-110"
  />
) : (
  <div className="relative">
    <video
      src={item.src}
      className="w-full h-[240px] sm:h-[280px] md:h-[300px] object-cover"
      preload="metadata"
      muted
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="bg-black/60 p-4 rounded-full">
        ▶
      </div>
    </div>
  </div>
)}


                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end">
                  <h3 className="text-white text-lg p-6">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          {selected.type === "image" ? (
            <img
              loading="lazy"
              src={selected.src}
              alt={selected.title}
              className="max-w-[95%] max-h-[85%]"
            />
          ) : (
            <video
              src={selected.src}
              controls
              autoPlay
              className="max-w-[95%] max-h-[85%]"
            />
          )}
        </div>
      )}
    </section>
  )
}

export default Projects
