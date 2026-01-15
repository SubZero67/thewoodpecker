import logo from "../assets/images/logo.png"

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[var(--bg)] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Thewoodpecker logo"
            className="h-10 w-auto"
          />
          <span className="text-xl font-semibold tracking-wide">
            Thewoodpecker
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-sm">
          <a href="#about" className="hover:text-[var(--accent)] transition">
            About
          </a>
          <a href="#projects" className="hover:text-[var(--accent)] transition">
            Projects
          </a>
          <a href="#services" className="hover:text-[var(--accent)] transition">
            Services
          </a>
          <a href="#contact" className="hover:text-[var(--accent)] transition">
            Contact
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
