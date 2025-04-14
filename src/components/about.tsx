
import React from 'react';
import {
  BookText,
  MessageSquareHeart,
  HandHeart,
  FlowerIcon,
  GraduationCap,
  CheckCircle,
  Target,
  Compass
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">

      {/* Om Meg Section */}
      <section id="om-meg" className="py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#6d816a]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#6d816a]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 md:px-20 lg:px-26 relative z-10">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
              Om Meg
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-[#6d816a] rounded-full"></span>
            </h2>
            <p className="text-gray-600 text-lg">Din dedikerte samtalepartner og veileder for personlig vekst</p>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            {/* Profile Section */}
            <div className="lg:w-2/5 w-full sticky top-10 self-start">
              <div className="relative mb-8">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-full h-full bg-[#6d816a]/20 rounded-2xl transform rotate-3"></div>
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#6d816a]/10 rounded-2xl transform -rotate-3"></div>

                {/* Main image */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-200 flex items-center justify-center">
                    <img className='w-full' src={"/anne-bilde.jpeg"} />

                  </div>
                </div>

                {/* Stats cards */}
                <div className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
                  <span className="text-3xl font-bold text-[#203d37]">5+</span>
                  <span className="text-sm text-gray-600">Års erfaring</span>
                </div>

                <div className="absolute -top-8 -right-8 bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
                  <span className="text-3xl font-bold text-[#203d37]">100+</span>
                  <span className="text-sm text-gray-600">Klienter</span>
                </div>
              </div>

              {/* Services Overview Cards */}
              <div className="grid grid-cols-1 gap-4 mt-12">
                <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#203d37] hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-[#6d816a]/10 rounded-full">
                      <MessageSquareHeart className="w-6 h-6 text-[#203d37]" />
                    </div>
                    <h3 className="font-semibold text-xl">Veiledningssamtaler</h3>
                  </div>
                  <p className="text-gray-600">Profesjonell støtte for personlig utvikling og livskvalitet</p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#203d37] hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-[#203d37]/10 rounded-full">
                      <FlowerIcon className="w-6 h-6 text-[#203d37]" />
                    </div>
                    <h3 className="font-semibold text-xl">Healing</h3>
                  </div>
                  <p className="text-gray-600">Energetisk balansering for velvære og indre ro</p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-3/5">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-3xl font-semibold mb-6 text-[#203d37]">Anna Kalinowska</h3>
                <p className="mb-6">
                  Mitt navn er Anna Kalinowska, og jeg tilbyr veiledningssamtaler og healing for deg som ønsker støtte i livet, enten du står overfor utfordringer på jobb, i personlige forhold, eller rett og slett søker mer balanse og energi i hverdagen.
                </p>

                <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 mb-8">
                  <h4 className="flex items-center text-xl font-medium mb-4 text-[#203d37]">
                    <GraduationCap className="mr-2 h-6 w-6" />
                    Min Bakgrunn
                  </h4>
                  <p className="mb-4">
                    Min bakgrunn er tverrfaglig og gir meg et grunnlag for å hjelpe deg. Jeg har en mastergrad i ledelse og organisasjonspsykologi fra Warszawa (Polen), og en fagskoleutdanning i Folkehelse og Livsmestring fra Kristiania.
                  </p>
                </div>

                <h4 className="flex items-center text-xl font-medium mb-4 text-[#203d37]">
                  <BookText className="mr-2 h-6 w-6" />
                  Utdanning og Kurs
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Interpersonal Communication",
                    "Positiv psykologi gjennom Paradigm Academy",
                    "Motiverende intervju med arbeidspsykolog",
                    "\"ADHD fungering i arbeidslivet\"",
                    "Coaching og relasjonsledelse fra AOF Skole",
                    "\"Kraina Snow\" via HorseSense",
                    "Healing og klarsyn kurs"
                  ].map((course, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-[#203d37] mt-1 shrink-0" />
                      <span className="text-gray-700">{course}</span>
                    </div>
                  ))}
                </div>

                <p className="mb-8">
                  Med min brede faglige bakgrunn og erfaring som veileder fra både NAV og tiltaksbransjen, har jeg jobbet med mennesker som trenger støtte innen karriereutvikling, personlig veiledning og hverdagskompetanse.
                </p>

                <h4 className="flex items-center text-xl font-medium mb-4 text-[#203d37]">
                  <HandHeart className="mr-2 h-6 w-6" />
                  Min Tilnærming
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                    <div className="p-3 bg-[#6d816a]/10 rounded-full mb-3">
                      <Compass className="h-6 w-6 text-[#203d37]" />
                    </div>
                    <h5 className="font-medium mb-2">Helhetlig</h5>
                    <p className="text-sm text-gray-600">Jeg ser hele mennesket og alle aspekter av ditt liv</p>
                  </div>

                  <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                    <div className="p-3 bg-[#6d816a]/10 rounded-full mb-3">
                      <HandHeart className="h-6 w-6 text-[#203d37]" />
                    </div>
                    <h5 className="font-medium mb-2">Empatisk</h5>
                    <p className="text-sm text-gray-600">Jeg møter deg med forståelse og ekte tilstedeværelse</p>
                  </div>

                  <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                    <div className="p-3 bg-[#6d816a]/10 rounded-full mb-3">
                      <Target className="h-6 w-6 text-[#203d37]" />
                    </div>
                    <h5 className="font-medium mb-2">Resultatorientert</h5>
                    <p className="text-sm text-gray-600">Jeg hjelper deg å oppnå konkrete og positive endringer</p>
                  </div>
                </div>

                <div className="bg-[#203d37]/5 p-6 rounded-xl italic">
                  <p>
                    Jeg ser på hver klient som et unikt individ, og min tilnærming er helhetlig, empatisk og resultatorientert. Jeg tror at vi alle har kraften til å skape endring, og mitt ønske er å være en trygg og støttende samtalepartner for deg, enten du trenger hjelp med å forstå dine utfordringer, oppnå mål, eller bare vil finne mer ro i hverdagen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
