"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { createPortal } from "react-dom"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Håndter scroll-status for headeren
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Forhindre scrolling i underliggende side når mobilmenyen er åpen
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
  }, [isMenuOpen])
  
  // Mobil meny som skal rendres i document.body via portal
  const mobileMenu = (
    <div className="md:hidden fixed inset-0 z-50 bg-white text-black overflow-y-auto">
      {/* Toppseksjon med logo og lukkeknapp */}
      <div className="px-6 md:px-20 lg:px-26 py-4 flex items-center justify-between border-b border-gray-200">
        <Link href="/">
          <span className="text-2xl font-bold">Gode samtaler</span>
        </Link>
        <button
          className="p-2 rounded-full bg-[#203d37] cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Lukk meny"
        >
          <X size={20} className="text-white" />
        </button>
      </div>
      {/* Navigasjonslinker */}
      <nav className="px-6 md:px-20 lg:px-26 py-4">
        <div className="flex flex-col space-y-3">
          {["Hjem", "Om", "Tjenester", "Kontakt"].map((item, index) => (
            <Link
              key={index}
              href={item === "Hjem" ? "/" : `#${item.toLowerCase().replace(" ", "-")}`}
              className="px-2 py-2 transition-colors border-l-2 border-transparent hover:border-[#203d37] hover:pl-3 text-black hover:text-[#203d37]"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            href="#kontakt"
            className="mt-4 px-6 py-3 rounded-lg transition-colors text-center bg-[#203d37] text-white hover:bg-gray-300 hover:text-black"
            onClick={() => setIsMenuOpen(false)}
          >
            Bestill veiledning
          </Link>
        </div>
      </nav>
    </div>
  )

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-6 md:px-20 lg:px-26">
          <div className="flex items-center justify-between">
            {/* Logo / Tittel */}
            <Link
              href="/"
              className={`text-2xl font-bold transition-colors ${scrolled ? "text-black" : "text-white"}`}
            >
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
                  className={`relative px-4 py-2 transition-colors group ${
                    scrolled ? "text-black hover:text-[#6d816a]" : "text-white hover:text-[#6d816a]"
                  }`}
                >
                  <span>{item}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6d816a] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <Link
                href="#kontakt"
                className={`ml-4 px-6 py-2 rounded-full transition-colors shadow-sm hover:shadow-md ${
                  scrolled ? "bg-[#203d37] text-white hover:bg-gray-800" : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                Bestill veiledning
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Lukk meny" : "Åpne meny"}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Render mobilmenyen via portal slik at den ikke påvirkes av headerens stacking context */}
      {typeof window !== "undefined" &&
        isMenuOpen &&
        createPortal(mobileMenu, document.body)}
    </>
  )
}
