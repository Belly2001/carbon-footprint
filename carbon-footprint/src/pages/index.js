import Head from 'next/head'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Carbon Footprint — Calcule ton empreinte carbone</title>
        <meta name="description" content="Calcule l'empreinte carbone de tes habitudes : transport, alimentation, numérique." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />
      <HeroSection />
      <Footer />
    </>
  )
}