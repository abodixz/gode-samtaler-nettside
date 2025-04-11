"use client"

import React from "react"
import { Phone, Mail, MapPin, Building } from "lucide-react"
import { Facebook, Instagram } from "lucide-react"

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Dekorative elementer */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#6d816a]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#6d816a]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
            Kontakt
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-[#6d816a] rounded-full"></span>
          </h2>
          <p className="text-gray-600 text-lg">
            Ta kontakt for å avtale en samtale eller få mer informasjon
          </p>
        </div>
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col">
            {/* Kontaktinformasjon */}
            <div className="bg-[#6d816a] text-white p-8 md:p-12">
              <h3 className="text-2xl font-semibold mb-8">Kontaktinformasjon</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center p-4 bg-white/10 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-200">
                  <Phone className="h-5 w-5 mr-3" />
                  <div>
                    <p className="font-medium text-white/80 text-sm">Telefon</p>
                    <p className="text-lg">939 56 400</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white/10 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-200">
                  <Mail className="h-5 w-5 mr-3" />
                  <div>
                    <p className="font-medium text-white/80 text-sm">E-post</p>
                    <p className="text-lg">Annagodesamtaler@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white/10 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-200">
                  <Building className="h-5 w-5 mr-3" />
                  <div>
                    <p className="font-medium text-white/80 text-sm">Organisasjonsnummer</p>
                    <p className="text-lg">934 750 551</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white/10 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-200">
                  <MapPin className="h-5 w-5 mr-3" />
                  <div>
                    <p className="font-medium text-white/80 text-sm">Adresse</p>
                    <p className="text-lg">Sarpsborg, Norway</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <div className="p-4 bg-white/10 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-200 text-center">
                  <p className="text-white/80 mb-2">Følg oss på sosiale medier</p>
                  <div className="flex space-x-4 justify-center">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 hover:scale-110"
                      aria-label="Facebook"
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 hover:scale-110"
                      aria-label="Instagram"
                    >
                      <Instagram size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Eventuelt kan du legge til flere seksjoner nedenfor */}
          </div>
        </div>
      </div>
    </section>
  )
}
