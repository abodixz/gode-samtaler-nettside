import Image from "next/image"
import { Home, Users, Video, ArrowRight, Sparkles } from "lucide-react"

export default function Services() {
  return (
    <section id="tjenester" className="py-24 md:py-32 bg-gray-50 mx-auto">
      {/* Bruk samme container på tvers av seksjoner */}
      <div className="container mx-auto px-6 md:px-20 lg:px-26">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
            Tjenester
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-[#6d816a] rounded-full"></span>
          </h2>
          <p className="text-gray-600 text-lg">
            Velg den samtaleformen som passer best for dine behov og preferanser. Alle samtaler varer i 50 minutter.
          </p>
        </div>

        {/* Enhanced Grid Layout with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* Hjemmekontor */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/hjemmekontor.png"
                alt="Hjemmekontor samtale"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-6 flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-3">
                  <Home className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Hjemmekontor</h3>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4 flex items-center">
                <span className="text-xs uppercase tracking-wider bg-[#6d816a]/10 text-[#203d37] px-3 py-1 rounded-full font-medium">
                  Personlig møte
                </span>
                <span className="ml-auto text-sm text-gray-500">50 minutter</span>
              </div>

              <p className="text-gray-600 mb-6">
                Samtaler gjennomføres i rolige og trygge omgivelser i Sarpsborg (Borgenhaugen). Her kan du slappe av og
                fokusere fullt på samtalen i et profesjonelt og komfortabelt miljø.
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center text-[#203d37] font-medium group-hover:underline">
                  <a href="#kontakt">Bestill veiledning</a>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
                <div className="text-sm text-gray-500">Fra kr 555,- inkl mva</div>
              </div>
            </div>
          </div>

          {/* Walk and Talk */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/walk-and-talk.png"
                alt="Walk and Talk samtale"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-6 flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Walk and Talk</h3>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4 flex items-center">
                <span className="text-xs uppercase tracking-wider bg-[#203d37]/10 text-[#6d816a] px-3 py-1 rounded-full font-medium">
                  Utendørs
                </span>
                <span className="ml-auto text-sm text-gray-500">50 minutter</span>
              </div>

              <p className="text-gray-600 mb-6">
                Kombinerer samtale med fysisk aktivitet ute i naturen. Bevegelse kan ofte gjøre det lettere å snakke om
                utfordrende temaer og gir en annen dynamikk til samtalen.
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center text-[#203d37] font-medium group-hover:underline">
                  <a href="#kontakt">Bestill veiledning</a>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
                <div className="text-sm text-gray-500">Fra kr 555,- inkl mva</div>
              </div>
            </div>
          </div>

          {/* Online-samtale */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/online-samtale.png"
                alt="Online samtale"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-6 flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-3">
                  <Video className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Online-samtale</h3>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4 flex items-center">
                <span className="text-xs uppercase tracking-wider bg-[#6d816a]/10 text-[#6d816a] px-3 py-1 rounded-full font-medium">
                  Digital
                </span>
                <span className="ml-auto text-sm text-gray-500">50 minutter</span>
              </div>

              <p className="text-gray-600 mb-6">
                Fleksibel løsning som lar deg delta i samtaler fra hvor som helst. Perfekt for deg som har en travel
                hverdag, bor langt unna eller foretrekker å snakke fra ditt eget trygge miljø.
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center text-[#203d37] font-medium group-hover:underline">
                  <a href="#kontakt">Bestill veiledning</a>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
                <div className="text-sm text-gray-500">Fra kr 555,- inkl mva</div>
              </div>
            </div>
          </div>

          {/* Healing */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/healing.png"
                alt="Healing session"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-6 flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-3">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Healing</h3>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4 flex items-center">
                <span className="text-xs uppercase tracking-wider bg-[#6d816a]/10 text-[#6d816a] px-3 py-1 rounded-full font-medium">
                  Energiarbeid
                </span>
                <span className="ml-auto text-sm text-gray-500">50 minutter</span>
              </div>

              <p className="text-gray-600 mb-6">
                Opplev dyp avspenning og energibalansering gjennom healing-sesjoner. Healing kan hjelpe med å redusere
                stress, fremme indre ro og støtte kroppens naturlige helbredelsesprosesser.
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center text-[#203d37] font-medium group-hover:underline">
                  <a href="#kontakt">Bestill veiledning</a>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
                <div className="text-sm text-gray-500">Fra kr 555,- inkl mva</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
