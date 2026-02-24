import { FaCar, FaUtensils, FaLaptop } from 'react-icons/fa'
import styles from '../styles/Categories.module.css'

export default function Categories() {
  const categories = [
    {
      icon: <FaCar />,
      titre: 'Transport',
      desc: 'Voiture, bus, métro, vélo... Quel impact ont tes trajets quotidiens ?',
      couleur: '#2563eb'
    },
    {
      icon: <FaUtensils />,
      titre: 'Alimentation',
      desc: 'Viande, végétarien, vegan... Ce que tu manges pèse lourd sur la balance.',
      couleur: '#e05d2c'
    },
    {
      icon: <FaLaptop />,
      titre: 'Numérique',
      desc: 'Streaming, mails, visio... Le numérique pollue plus qu\'on ne le croit.',
      couleur: '#7c3aed'
    }
  ]

  return (
    <section className={styles.section}>
      <h2 className={styles.titre}>Qu'est-ce qu'on mesure ?</h2>
      <p className={styles.sousTitre}>
        Ton empreinte carbone se décompose en grandes catégories
      </p>

      <div className={styles.grid}>
        {categories.map((cat, i) => (
          <div key={i} className={styles.card}>
            <div
              className={styles.iconWrapper}
              style={{ backgroundColor: cat.couleur }}
            >
              {cat.icon}
            </div>
            <h3>{cat.titre}</h3>
            <p>{cat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}