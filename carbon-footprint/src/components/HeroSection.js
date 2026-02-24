import Link from 'next/link'
import { FaCalculator, FaInfoCircle } from 'react-icons/fa'
import styles from '../styles/Hero.module.css'

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* video en fond */}
      <video
        className={styles.videoBg}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/bg-nature.mp4" type="video/mp4" />
      </video>

      {/* overlay sombre pour lire le texte */}
      <div className={styles.overlay}></div>

      {/* contenu par dessus la video */}
      <div className={styles.content}>
        <h1 className={styles.titre}>
          CALCULEZ<br/>
          VOTRE EMPREINTE<br/>
          CARBONE
        </h1>
        <p className={styles.sousTitre}>
          Calcule l'impact de tes habitudes sur la planète.
          Transport, alimentation, numérique — découvre ton bilan en 2 minutes.
        </p>
        <div className={styles.buttons}>
          <Link href="/calculateur" className={styles.btnPrimary}>
            <FaCalculator />
            <span>Calculer mon empreinte</span>
          </Link>
          <a href="#comment-ca-marche" className={styles.btnSecondary}>
            <FaInfoCircle />
            <span>Comment ça marche</span>
          </a>
        </div>
      </div>
    </section>
  )
}