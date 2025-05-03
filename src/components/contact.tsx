"use client"

import React from "react"
import { Phone, Mail, MapPin, Building } from "lucide-react"
import { Facebook} from "lucide-react"

export default function Contact() {
  return (
    <section id="kontakt" className="py-20 md:py-20 bg-gray-50 relative overflow-hidden">
      {/* Dekorative elementer */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#203d37]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#203d37]/5 rounded-full blur-3xl"></div>

      {/* Oppdatert container med samme sizing som de andre seksjonene */}
      <div className="container mx-auto px-6 md:px-20 lg:px-26 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          {/* Setter mindre skrift på mobil og øker på større enheter */}
          <h2 className="text-2xl md:text-4xl font-bold mb-6 relative inline-block">
            Kontakt
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-[#6d816a] rounded-full"></span>
          </h2>
          {/* Bruker text-sm på mobil */}
          <p className="text-gray-600">
            Ta kontakt for å avtale en samtale eller få mer informasjon
          </p>
        </div>
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col">
            {/* Kontaktinformasjon */}
            <div className="bg-[#203d37] text-white p-6 md:p-12">
              {/* Gjerne litt mindre overskrift på mobil */}
              <h3 className="text-xl md:text-2xl font-semibold mb-6">Kontaktinformasjon</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center p-3 bg-white/10 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-200">
                  <Phone className="h-5 w-5 mr-2" />
                  <div>
                    <p className="font-medium text-white/80 text-xs md:text-sm">Telefon</p>
                    <p className="text-base md:text-lg">939 56 400</p>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-white/10 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-200">
                  <Mail className="h-5 w-5 mr-2" />
                  <div>
                    <p className="font-medium text-white/80 text-xs md:text-sm">E-post</p>
                    <p className="text-base md:text-lg">annagodesamtaler@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-white/10 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-200">
                  <Building className="h-5 w-5 mr-2" />
                  <div>
                    <p className="font-medium text-white/80 text-xs md:text-sm">Organisasjonsnummer</p>
                    <p className="text-base md:text-lg">934 750 551</p>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-white/10 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-200">
                  <MapPin className="h-5 w-5 mr-2" />
                  <div>
                    <p className="font-medium text-white/80 text-xs md:text-sm">Adresse</p>
                    <p className="text-base md:text-lg">Sarpsborg, Norway</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="p-3 bg-white/10 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-200 text-center">
                  <p className="text-white/80 mb-1 text-xs md:text-sm">Følg meg på sosiale medier</p>
                  <div className="flex space-x-3 justify-center">
                    <a
                      href="https://www.facebook.com/profile.php?id=61571456643527"
                      className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 hover:scale-110"
                      aria-label="Facebook"
                    >
                      <Facebook size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
