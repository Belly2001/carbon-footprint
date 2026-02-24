import { getNiveau } from '../utils/carbonCalculator'
import styles from '../styles/Resultats.module.css'

export default function ScoreCard({ total }) {
  const niveau = getNiveau(total)
  const totalAnnuel = ((total * 52) / 1000).toFixed(1)

  return (
    <div className={styles.scoreCard}>
      <div className={styles.scoreHeader}>
        <span className={styles.emoji}>{niveau.emoji}</span>
        <h2>Ton empreinte carbone</h2>
      </div>

      <div className={styles.scoreValue}>
        <span className={styles.nombre}>{total.toFixed(1)}</span>
        <span className={styles.unite}>kg CO₂ / semaine</span>
      </div>

      <div
        className={styles.niveauBadge}
        style={{ backgroundColor: niveau.couleur }}
      >
        {niveau.label}
      </div>

      <p className={styles.annuel}>
        Soit environ <strong>{totalAnnuel} tonnes</strong> de CO₂ par an
      </p>
    </div>
  )
}