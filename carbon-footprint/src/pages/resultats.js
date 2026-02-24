import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScoreCard from '../components/ScoreCard'
import DoughnutChart from '../components/DoughnutChart'
import BarChart from '../components/BarChart'
import ConseilCard from '../components/ConseilCard'
import { getConseils } from '../utils/carbonCalculator'
import styles from '../styles/Resultats.module.css'

export default function Resultats() {
  const router = useRouter()

  const transport = parseFloat(router.query.transport) || 0
  const alimentation = parseFloat(router.query.alimentation) || 0
  const numerique = parseFloat(router.query.numerique) || 0
  const total = transport + alimentation + numerique

  const conseils = getConseils(transport, alimentation, numerique)

  return (
    <>
      <Head>
        <title>Mes résultats — Carbon Footprint</title>
      </Head>

      <Navbar />

      <div className={styles.page}>
        {/* video en fond de toute la page */}
        <video
          className={styles.videoBg}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/bg-nature.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay}></div>

        <div className={styles.container}>
          <h1 className={styles.titrePage}>Tes résultats</h1>

          <ScoreCard total={total} />

          <div className={styles.chartsGrid}>
            <DoughnutChart
              transport={transport}
              alimentation={alimentation}
              numerique={numerique}
            />
            <BarChart total={total} />
          </div>

          <ConseilCard conseils={conseils} />

          <div className={styles.actions}>
            <Link href="/calculateur" className={styles.btnRecalculer}>
              🔄 Recalculer
            </Link>
            <Link href="/" className={styles.btnAccueil}>
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}