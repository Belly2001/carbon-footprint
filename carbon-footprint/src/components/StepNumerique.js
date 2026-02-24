import { FaEnvelope, FaVideo, FaYoutube, FaSearch } from 'react-icons/fa'
import styles from '../styles/Calculateur.module.css'

const usages = [
  { id: 'streaming', label: 'Streaming vidéo', icon: <FaYoutube />, unite: 'heures/jour' },
  { id: 'visio', label: 'Visioconférence', icon: <FaVideo />, unite: 'heures/jour' },
  { id: 'email', label: 'Emails', icon: <FaEnvelope />, unite: 'emails/jour' },
  { id: 'recherche_web', label: 'Recherche web', icon: <FaSearch />, unite: 'recherches/jour' }
]

export default function StepNumerique({ data, onChange }) {
  // on met a jour la valeur pour chaque type d'usage
  const handleChange = (id, value) => {
    onChange({
      ...data,
      usages: { ...data.usages, [id]: value }
    })
  }

  return (
    <div className={styles.stepContent}>
      <h2>💻 Ton usage numérique</h2>
      <p className={styles.stepDesc}>
        Estime ta consommation numérique quotidienne.
      </p>

      <div className={styles.numeriqueGrid}>
        {usages.map((u) => (
          <div key={u.id} className={styles.numeriqueCard}>
            <div className={styles.numeriqueHeader}>
              <span className={styles.numeriqueIcon}>{u.icon}</span>
              <span className={styles.numeriqueLabel}>{u.label}</span>
            </div>
            <input
              type="number"
              min="0"
              max="24"
              placeholder="0"
              value={data.usages?.[u.id] || ''}
              onChange={(e) => handleChange(u.id, e.target.value)}
            />
            <span className={styles.unite}>{u.unite}</span>
          </div>
        ))}
      </div>
    </div>
  )
}