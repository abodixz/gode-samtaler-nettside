import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6d816a]/30 via-[#6d816a] to-[#6d816a]/30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#6d816a]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#6d816a]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Logo and description */}
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold mb-4 text-white">
              <span className="relative">
                Gode samtaler
                <span className="absolute -bottom-1 left-0 w-1/3 h-0.5 bg-[#6d816a]"></span>
              </span>
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Profesjonell samtaleterapi og veiledning som hjelper deg å navigere livets utfordringer med ro og innsikt.
              Vi tilbyr et trygt rom for personlig vekst og utvikling.
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

          {/* Quick links */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white">Navigasjon</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#6d816a] rounded-full mr-2"></span>
                  Hjem
                </Link>
              </li>
              <li>
                <Link
                  href="#om-oss"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#6d816a] rounded-full mr-2"></span>
                  Om
                </Link>
              </li>
              <li>
                <Link
                  href="#tjenester"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#6d816a] rounded-full mr-2"></span>
                  Tjenester
                </Link>
              </li>
              <li>
                <Link
                  href="#kontakt"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#6d816a] rounded-full mr-2"></span>
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white">Tjenester</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#tjenester"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#6d816a] rounded-full mr-2"></span>
                  Hjemmekontor
                </Link>
              </li>
              <li>
                <Link
                  href="#tjenester"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#6d816a] rounded-full mr-2"></span>
                  Walk and Talk
                </Link>
              </li>
              <li>
                <Link
                  href="#tjenester"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#6d816a] rounded-full mr-2"></span>
                  Online-samtale
                </Link>
              </li>
              <li>
                <Link
                  href="#tjenester"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#6d816a] rounded-full mr-2"></span>
                  Healing
                </Link>
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
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Gode samtaler. Alle rettigheter reservert. Org.nr: 934 750 551
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              <Link href="/personvern" className="hover:text-white transition-colors mr-6">
                Personvernerklæring
              </Link>
              <Link href="/vilkar" className="hover:text-white transition-colors">
                Vilkår og betingelser
              </Link>
            </div>
          </div>

          <div className="mt-6 text-center text-gray-500 text-xs flex items-center justify-center">
            <span>Laget med</span>
            <Heart className="h-3 w-3 mx-1 text-[#6d816a]" />
            <a href="https://egera.no/">
            <span>av Egera.no</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
