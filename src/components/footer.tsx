import React from "react";
import { Facebook, Instagram, Mail, Phone, MapPin, Heart, Sparkles, Star } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#203d37]/30 via-[#203d37] to-[#6d816a]/30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#6d816a]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#6d816a]/5 rounded-full blur-3xl"></div>

      {/* Oppdatert container med samme sizing */}
      <div className="container mx-auto px-6 md:px-20 lg:px-26 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
          {/* Logo and description */}
          <div className="md:col-span-5">
            <h2 className="text-2xl font-bold mb-4 text-white">
              <span className="relative">
                Gode samtaler
                <span className="absolute -bottom-1 left-0 w-1/3 h-0.5 bg-[#6d816a]"></span>
              </span>
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
            Ser frem til å møte deg, høre din historie, og være med på å skape de positive endringene du ønsker i livet ditt.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#6d816a] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#6d816a] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:Annagodesamtaler@gmail.com"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#6d816a] transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4 text-white">Tjenester</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#tjenester"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#6d816a] rounded-full mr-2"></span>
                  Hjemmekontor
                </a>
              </li>
              <li>
                <a
                  href="#tjenester"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#6d816a] rounded-full mr-2"></span>
                  Walk and Talk
                </a>
              </li>
              <li>
                <a
                  href="#tjenester"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#6d816a] rounded-full mr-2"></span>
                  Online-samtale
                </a>
              </li>
              <li>
                <a
                  href="#tjenester"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#6d816a] rounded-full mr-2"></span>
                  Healing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact information */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-4 text-white">Kontaktinformasjon</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mt-1 mr-3 p-2 bg-white/10 rounded-lg">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Telefon</p>
                  <p className="text-white">939 56 400</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-3 p-2 bg-white/10 rounded-lg">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">E-post</p>
                  <p className="text-white">Annagodesamtaler@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-3 p-2 bg-white/10 rounded-lg">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Adresse</p>
                  <p className="text-white">Sarpsborg, Norway</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700/50">

          <div className="mt-10">
            <a 
              href="https://egera.no/" 
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-gradient-to-r from-[#6d816a]/20 to-[#6d816a]/50 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-white/10 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
                    Laget med
                  </span>
                  <div className="flex items-center">
                    <Heart 
                      className="h-6 w-6 text-pink-400 animate-pulse mx-1 group-hover:scale-110 transition-transform" 
                      fill="#ff70a6" 
                    />
                    <Sparkles 
                      className="h-5 w-5 text-yellow-300 animate-spin-slow opacity-70 group-hover:opacity-100 transition-all" 
                    />
                  </div>
                  <span 
                    className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 group-hover:from-[#6d816a] group-hover:to-white transition-all duration-300 group-hover:scale-105 underline decoration-[#6d816a] decoration-2 underline-offset-4"
                  >
                    av egera.no
                  </span>
                  <Star 
                    className="h-5 w-5 text-yellow-400 ml-2 group-hover:rotate-12 transition-transform" 
                    fill="#fbbf24" 
                  />
                </div>
              </div>
            </a>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-20">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Gode samtaler. Alle rettigheter reservert. Org.nr: 934 750 551
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
