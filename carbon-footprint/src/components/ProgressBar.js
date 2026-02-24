import styles from '../styles/Calculateur.module.css'

export default function ProgressBar({ etapeActuelle, totalEtapes }) {
  return (
    <div className={styles.progressContainer}>
      {Array.from({ length: totalEtapes }, (_, i) => (
        <div key={i} className={styles.progressStep}>
          <div
            className={`${styles.progressCircle} ${
              i + 1 <= etapeActuelle ? styles.progressActive : ''
            }`}
          >
            {i + 1}
          </div>
          {i < totalEtapes - 1 && (
            <div
              className={`${styles.progressLine} ${
                i + 1 < etapeActuelle ? styles.progressLineActive : ''
              }`}
            />
          )}
        </div>
      ))}
    </div>
  )
}