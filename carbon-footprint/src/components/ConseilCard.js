import styles from '../styles/Resultats.module.css'

export default function ConseilCard({ conseils }) {
  return (
    <div className={styles.conseilsCard}>
      <h3>💡 Nos conseils pour toi</h3>
      <div className={styles.conseilsList}>
        {conseils.map((conseil, i) => (
          <div key={i} className={styles.conseilItem}>
            <p>{conseil}</p>
          </div>
        ))}
      </div>
    </div>
  )
}