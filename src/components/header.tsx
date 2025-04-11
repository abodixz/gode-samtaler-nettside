"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-black">
            <span className="inline-block relative">
              Gode samtaler
              <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-[#6d816a] rounded-full"></span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {["Hjem", "Om", "Tjenester", "Kontakt"].map((item, index) => (
              <Link
                key={index}
                href={item === "Hjem" ? "/" : `#${item.toLowerCase().replace(" ", "-")}`}
                className="relative px-4 py-2 text-gray-700 hover:text-[#6d816a] transition-colors group"
              >
                <span>{item}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6d816a] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="#kontakt"
              className="ml-4 px-6 py-2 bg-[#6d816a] text-white rounded-full hover:bg-[#5a6d58] transition-colors shadow-sm hover:shadow-md"
            >
              Bestill veiledning
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#6d816a]/10 text-[#6d816a]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Lukk meny" : "Åpne meny"}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Slide Down Panel */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden",
          isMenuOpen ? "max-h-[300px] border-t border-gray-100" : "max-h-0",
        )}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-3">
            {["Hjem", "Om", "Tjenester", "Kontakt"].map((item, index) => (
              <Link
                key={index}
                href={item === "Hjem" ? "/" : `#${item.toLowerCase().replace(" ", "-")}`}
                className="px-2 py-2 text-gray-700 hover:text-[#6d816a] transition-colors border-l-2 border-transparent hover:border-[#6d816a] hover:pl-3"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link
              href="#kontakt"
              className="mt-4 px-6 py-3 bg-[#6d816a] text-white rounded-lg hover:bg-[#5a6d58] transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Bestill veiledning
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
