import Head from 'next/head'
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <>
      <Head>
        {/* Grunnleggende metadata */}
        <title>Din Nettside – Hjem</title>
        <meta name="description" content="Velkommen til gode samtaler. Her finner du informasjon om våre tjenester, bakgrunn og kontaktinformasjon." />
        <meta name="keywords" content="Next.js, webutvikling, tjenester, om oss, kontakt, SEO, gode samtaler" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://din-nettside.no/" />

        {/* Open Graph for deling på sosiale medier */}
        <meta property="og:title" content="Din Nettside – Hjem" />
        <meta property="og:description" content="Velkommen til Din Nettside. Lær mer om våre tjenester og kontakt oss for mer informasjon." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://din-nettside.no/" />
        <meta property="og:image" content="https://din-nettside.no/path/to/og-image.jpg" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Din Nettside – Hjem" />
        <meta name="twitter:description" content="Velkommen til Din Nettside. Lær mer om våre tjenester og kontaktinformasjon." />
        <meta name="twitter:image" content="https://din-nettside.no/path/to/twitter-image.jpg" />
      </Head>
      <main className="min-h-screen">
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
    </>
  )
}
