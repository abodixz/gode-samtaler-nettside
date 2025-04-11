import Image from "next/image"

export default function About() {
  return (
    <section id="om-oss" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#6d816a]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#6d816a]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
            Om Gode samtaler
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-[#6d816a] rounded-full"></span>
          </h2>
          <p className="text-gray-600 text-lg">Møt Anna Kalinowska, din dedikerte samtalepartner og veileder</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-2/5 w-full max-w-md mx-auto">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-[#6d816a]/20 rounded-2xl transform rotate-3"></div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#6d816a]/10 rounded-2xl transform -rotate-3"></div>

              {/* Main image - fixed for mobile */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/anne-bilde.jpeg"
                  alt="Anna Kalinowska"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Stats cards */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
                <span className="text-3xl font-bold text-[#6d816a]">5+</span>
                <span className="text-sm text-gray-600">Års erfaring</span>
              </div>

              <div className="absolute -top-8 -right-8 bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
                <span className="text-3xl font-bold text-[#6d816a]">100+</span>
                <span className="text-sm text-gray-600">Klienter</span>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5">
            <h3 className="text-3xl font-semibold mb-6">Anna Kalinowska</h3>

            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                Velkommen til Gode samtaler. Jeg er Anna Kalinowska, og jeg har dedikert min karriere til å hjelpe
                mennesker finne klarhet, balanse og velvære gjennom personlig veiledning og samtaleterapi.
              </p>

              <p className="text-lg leading-relaxed">
                Med min bakgrunn innen psykologi og veiledning, tilbyr jeg et trygt rom hvor du kan utforske dine
                tanker, følelser og utfordringer. Min tilnærming er helhetlig og personlig, med fokus på å skape en
                støttende atmosfære hvor du kan vokse og utvikle deg.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {[
                  { title: "Empatisk lytting", desc: "Jeg lytter aktivt og med full tilstedeværelse" },
                  { title: "Personlig tilnærming", desc: "Hver samtale tilpasses dine unike behov" },
                  { title: "Trygge rammer", desc: "Skaper et rom hvor du kan være helt deg selv" },
                  { title: "Profesjonell veiledning", desc: "Basert på solid faglig kompetanse" },
                ].map((item, i) => (
                  <div key={i} className="bg-[#6d816a]/5 rounded-xl p-4">
                    <h4 className="font-medium text-[#6d816a] mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
