"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronRight, Sparkles, Heart, Shield } from "lucide-react"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background image with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 transition-transform duration-500 ease-out"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          <Image src="/images/hero-bg.png" alt="Peaceful nature background" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#6d816a]/90 via-[#6d816a]/80 to-[#6d816a]/70"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      {/* Floating elements */}
      <div
        className="absolute top-1/4 right-[10%] w-20 h-20 bg-white/10 backdrop-blur-md rounded-full transform rotate-12 animate-float-slow hidden md:block"
        style={{
          animation: "float 8s ease-in-out infinite",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      ></div>
      <div
        className="absolute bottom-1/4 left-[15%] w-12 h-12 bg-white/20 backdrop-blur-md rounded-full transform -rotate-12 hidden md:block"
        style={{
          animation: "float 6s ease-in-out infinite 1s",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-3/5 text-white">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm mb-6">
                <Sparkles className="h-3.5 w-3.5 mr-2" />
                <span>Velkommen til Gode samtaler</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Finn{" "}
                <span className="relative inline-block">
                  klarhet
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="6"
                    viewBox="0 0 200 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 3C50 0.5 150 0.5 200 3"
                      stroke="white"
                      strokeOpacity="0.5"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                og balanse med personlig veiledning
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Profesjonell samtaleterapi som hjelper deg å navigere livets utfordringer med ro og innsikt
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href="#kontakt"
                  className="group bg-white text-[#6d816a] px-8 py-3.5 rounded-full font-medium text-lg hover:bg-opacity-95 transition-all shadow-lg hover:shadow-xl hover:translate-y-[-2px] flex items-center"
                >
                  <span>Ta kontakt</span>
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#tjenester"
                  className="bg-transparent text-white border-2 border-white/60 px-8 py-3.5 rounded-full font-medium text-lg hover:bg-white/10 transition-all flex items-center"
                >
                  <span>Utforsk tjenester</span>
                </a>
              </div>

              {/* Feature badges */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Shield className="h-4 w-4 mr-2 text-white/80" />
                  <span className="text-sm text-white/90">Profesjonell veiledning</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Heart className="h-4 w-4 mr-2 text-white/80" />
                  <span className="text-sm text-white/90">Personlig tilnærming</span>
                </div>
              </div>
            </div>

            <div className="md:w-2/5 mt-10 md:mt-0 w-full max-w-md mx-auto">
              <div className="relative pb-8 md:pb-0">
                {" "}
                {/* Added padding-bottom for mobile */}
                {/* Decorative elements - adjusted for mobile */}
                <div className="absolute -top-6 -left-6 w-full h-[calc(100%-2rem)] md:h-full bg-white/10 backdrop-blur-sm rounded-2xl transform rotate-3"></div>
                <div className="absolute -bottom-6 -right-6 w-full h-[calc(100%-2rem)] md:h-full bg-white/5 backdrop-blur-sm rounded-2xl transform -rotate-3"></div>
                {/* Card content */}
                <div className="relative bg-white/95 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl">
                  <div className="text-[#6d816a] text-lg font-medium mb-5">Gode samtaler tilbyr</div>

                  <div className="space-y-4 md:space-y-5">
                    {[
                      {
                        title: "Personlig veiledning",
                        desc: "Samtaler tilpasset dine unike behov og utfordringer",
                      },
                      {
                        title: "Trygge samtalerom",
                        desc: "Et støttende miljø hvor du kan utforske tanker og følelser",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start bg-[#6d816a]/5 rounded-xl p-4 transition-transform hover:translate-x-1 duration-300"
                      >
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#6d816a]/20 flex items-center justify-center mt-0.5 mr-3">
                          <span className="w-2 h-2 rounded-full bg-[#6d816a]"></span>
                        </span>
                        <div>
                          <h3 className="font-medium text-gray-800">{item.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <a
                      href="#om-oss"
                      className="group flex items-center justify-center w-full bg-[#6d816a]/10 hover:bg-[#6d816a]/20 text-[#6d816a] rounded-xl py-3 transition-colors"
                    >
                      <span className="font-medium">Les mer om meg</span>
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#6d816a]/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#6d816a]/10 rounded-full blur-3xl"></div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(12deg);
          }
          50% {
            transform: translateY(-20px) rotate(12deg);
          }
        }
      `}</style>
    </section>
  )
}
