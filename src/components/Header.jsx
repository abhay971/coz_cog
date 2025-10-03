import { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white shadow-lg py-3'
        : 'bg-white/95 backdrop-blur-sm shadow-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="/logo/COZ_COG.png"
              alt="Company Logo"
              className="h-10 sm:h-12 w-auto transform hover:scale-110 transition-transform"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a href="#home" className="text-black hover:text-[#F37E3A] transition-colors font-medium relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F37E3A] group-hover:w-full transition-all"></span>
            </a>
            <a href="#about" className="text-black hover:text-[#F37E3A] transition-colors font-medium relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F37E3A] group-hover:w-full transition-all"></span>
            </a>
            <a href="#equipment" className="text-black hover:text-[#F37E3A] transition-colors font-medium relative group">
              Machinery
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F37E3A] group-hover:w-full transition-all"></span>
            </a>
            <a href="#services" className="text-black hover:text-[#F37E3A] transition-colors font-medium relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F37E3A] group-hover:w-full transition-all"></span>
            </a>
            <a href="#contact" className="text-black hover:text-[#F37E3A] transition-colors font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F37E3A] group-hover:w-full transition-all"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-black p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4 animate-slideDown">
            <div className="flex flex-col space-y-3">
              <a
                href="#home"
                className="text-black py-2 hover:text-[#F37E3A] transition-all hover:translate-x-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-black py-2 hover:text-[#F37E3A] transition-all hover:translate-x-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#equipment"
                className="text-black py-2 hover:text-[#F37E3A] transition-all hover:translate-x-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Machinery
              </a>
              <a
                href="#services"
                className="text-black py-2 hover:text-[#F37E3A] transition-all hover:translate-x-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-black py-2 hover:text-[#F37E3A] transition-all hover:translate-x-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header
