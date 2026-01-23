import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import About from "./pages/About"

import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa"


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <About/>
      <Services />
      <Contact />

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/8123206665?text=Hi%20I%20am%20interested%20in%20your%20interior%20design%20services"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6
                   bg-green-500 text-white p-4 rounded-full shadow-lg
                   hover:scale-110 transition z-50"
      >
        <FaWhatsapp size={26} />
      </a>

      {/* Floating Instagram */}
      <a
        href="https://www.instagram.com/thewoodpeckerig?igsh=MTduZXZjM2c2aHUycw=="
        className="fixed bottom-5 right-16 sm:bottom-6 sm:right-20
                   bg-pink-500 text-white p-4 rounded-full shadow-lg
                   hover:scale-110 transition z-50"
      >
        <FaInstagram size={26} />
      </a>
      <a
  href="mailto:Thewoodpeckerinterio@gmail.com"
  className="fixed bottom-5 right-28 sm:bottom-6 sm:right-32
             bg-gray-800 text-white p-4 rounded-full shadow-lg
             hover:scale-110 transition z-50"
>
  <FaEnvelope size={22} />
</a>

    </>
  )
}

export default App
