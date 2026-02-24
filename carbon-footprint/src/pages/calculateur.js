import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProgressBar from '../components/ProgressBar'
import StepTransport from '../components/StepTransport'
import StepAlimentation from '../components/StepAlimentation'
import StepNumerique from '../components/StepNumerique'
import {
  calculerTransport,
  calculerAlimentation,
  calculerNumerique
} from '../utils/carbonCalculator'
import styles from '../styles/Calculateur.module.css'

export default function Calculateur() {
  const router = useRouter()

  // etape actuelle du formulaire (1, 2 ou 3)
  const [etape, setEtape] = useState(1)

  // donnees de chaque etape
  const [transport, setTransport] = useState({
    type: '',
    distance: '',
    jours: ''
  })

  const [alimentation, setAlimentation] = useState({
    type: '',
    repas: ''
  })

  const [numerique, setNumerique] = useState({
    usages: {}
  })

  // passer a l'etape suivante
  const suivant = () => {
    if (etape < 3) setEtape(etape + 1)
  }

  // revenir en arriere
  const precedent = () => {
    if (etape > 1) setEtape(etape - 1)
  }

  // quand on clique sur "Voir mes resultats"
  const voirResultats = () => {
    // on calcule tout
    const totalTransport = calculerTransport(
      transport.type,
      parseFloat(transport.distance) || 0,
      parseInt(transport.jours) || 0
    )

    const totalAlimentation = calculerAlimentation(
      alimentation.type,
      parseInt(alimentation.repas) || 0
    )

    // pour le numerique, on additionne tous les usages
    let totalNumerique = 0
    const usages = numerique.usages || {}
    Object.keys(usages).forEach((type) => {
      totalNumerique += calculerNumerique(type, parseFloat(usages[type]) || 0)
    })

    // on envoie les resultats dans l'URL pour la page resultats
    router.push({
      pathname: '/resultats',
      query: {
        transport: totalTransport.toFixed(2),
        alimentation: totalAlimentation.toFixed(2),
        numerique: totalNumerique.toFixed(2)
      }
    })
  }

  return (
    <>
      <Head>
        <title>Calculateur — Carbon Footprint</title>
      </Head>

      <Navbar />

      <div className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.titrePage}>Calcule ton empreinte</h1>

          <ProgressBar etapeActuelle={etape} totalEtapes={3} />

          <div className={styles.formCard}>
            {/* on affiche l'etape qui correspond */}
            {etape === 1 && (
              <StepTransport data={transport} onChange={setTransport} />
            )}
            {etape === 2 && (
              <StepAlimentation data={alimentation} onChange={setAlimentation} />
            )}
            {etape === 3 && (
              <StepNumerique data={numerique} onChange={setNumerique} />
            )}

            {/* boutons precedent / suivant */}
            <div className={styles.navigation}>
              {etape > 1 ? (
                <button className={styles.btnPrecedent} onClick={precedent}>
                  ← Précédent
                </button>
              ) : (
                <div></div>
              )}

              {etape < 3 ? (
                <button className={styles.btnSuivant} onClick={suivant}>
                  Suivant →
                </button>
              ) : (
                <button className={styles.btnSuivant} onClick={voirResultats}>
                  🌱 Voir mes résultats
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}