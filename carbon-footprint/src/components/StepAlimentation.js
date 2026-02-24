import styles from '../styles/Calculateur.module.css'

const regimes = [
  { id: 'viande_rouge', label: '🥩 Viande rouge', desc: 'Boeuf, agneau...' },
  { id: 'viande_blanche', label: '🍗 Viande blanche', desc: 'Poulet, dinde...' },
  { id: 'poisson', label: '🐟 Poisson', desc: 'Poisson, fruits de mer' },
  { id: 'vegetarien', label: '🥗 Végétarien', desc: 'Légumes, oeufs, fromage' },
  { id: 'vegan', label: '🌱 Vegan', desc: '100% végétal' }
]

export default function StepAlimentation({ data, onChange }) {
  const handleSelect = (id) => {
    onChange({ ...data, type: id })
  }

  return (
    <div className={styles.stepContent}>
      <h2>🍽️ Comment tu manges ?</h2>
      <p className={styles.stepDesc}>
        Quel est ton régime alimentaire principal cette semaine ?
      </p>

      <div className={styles.optionsGrid}>
        {regimes.map((r) => (
          <button
            key={r.id}
            className={`${styles.optionCard} ${
              data.type === r.id ? styles.optionSelected : ''
            }`}
            onClick={() => handleSelect(r.id)}
          >
            <span className={styles.optionLabel}>{r.label}</span>
            <span className={styles.optionDesc}>{r.desc}</span>
          </button>
        ))}
      </div>

      <div className={styles.inputGroup}>
        <label>Combien de repas par semaine (de ce type) ?</label>
        <input
          type="number"
          min="1"
          max="21"
          placeholder="Ex: 10"
          value={data.repas || ''}
          onChange={(e) => onChange({ ...data, repas: e.target.value })}
        />
      </div>
    </div>
  )
}