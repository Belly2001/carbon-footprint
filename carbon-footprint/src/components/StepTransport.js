import { FaCar, FaBus, FaSubway, FaTrain, FaBicycle, FaWalking } from 'react-icons/fa'
import styles from '../styles/Calculateur.module.css'

const transports = [
  { id: 'voiture', label: 'Voiture', icon: <FaCar /> },
  { id: 'bus', label: 'Bus', icon: <FaBus /> },
  { id: 'metro', label: 'Métro', icon: <FaSubway /> },
  { id: 'train', label: 'Train', icon: <FaTrain /> },
  { id: 'velo', label: 'Vélo', icon: <FaBicycle /> },
  { id: 'marche', label: 'Marche', icon: <FaWalking /> }
]

export default function StepTransport({ data, onChange }) {
  // quand l'utilisateur clique sur un transport
  const handleSelect = (id) => {
    onChange({ ...data, type: id })
  }

  return (
    <div className={styles.stepContent}>
      <h2>🚗 Comment tu te déplaces ?</h2>
      <p className={styles.stepDesc}>
        Choisis ton moyen de transport principal pour aller en cours ou au travail.
      </p>

      <div className={styles.optionsGrid}>
        {transports.map((t) => (
          <button
            key={t.id}
            className={`${styles.optionCard} ${
              data.type === t.id ? styles.optionSelected : ''
            }`}
            onClick={() => handleSelect(t.id)}
          >
            <span className={styles.optionIcon}>{t.icon}</span>
            <span>{t.label}</span>
          </button>
        ))}
      </div>

      <div className={styles.inputGroup}>
        <label>Distance aller (en km)</label>
        <input
          type="number"
          min="0"
          max="200"
          placeholder="Ex: 12"
          value={data.distance || ''}
          onChange={(e) => onChange({ ...data, distance: e.target.value })}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Combien de jours par semaine ?</label>
        <input
          type="number"
          min="1"
          max="7"
          placeholder="Ex: 5"
          value={data.jours || ''}
          onChange={(e) => onChange({ ...data, jours: e.target.value })}
        />
      </div>
    </div>
  )
}