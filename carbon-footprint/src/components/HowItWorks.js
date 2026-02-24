import { FaClipboardList, FaChartPie, FaLightbulb } from 'react-icons/fa'
import styles from '../styles/HowItWorks.module.css'

export default function HowItWorks() {
  const etapes = [
    {
      icon: <FaClipboardList />,
      numero: '01',
      titre: 'Remplis le formulaire',
      desc: 'Réponds à quelques questions sur tes habitudes : transport, alimentation et usage numérique.'
    },
    {
      icon: <FaChartPie />,
      numero: '02',
      titre: 'Découvre ton bilan',
      desc: 'On calcule ton empreinte carbone avec les données de l\'ADEME et on t\'affiche tout en graphiques.'
    },
    {
      icon: <FaLightbulb />,
      numero: '03',
      titre: 'Passe à l\'action',
      desc: 'Reçois des conseils personnalisés pour réduire ton impact au quotidien.'
    }
  ]

  return (
    <section className={styles.section} id="comment-ca-marche">
      <h2 className={styles.titre}>Comment ça marche ?</h2>
      <p className={styles.sousTitre}>3 étapes simples pour connaître ton impact</p>

      <div className={styles.grid}>
        {etapes.map((etape, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.iconWrapper}>
              {etape.icon}
            </div>
            <span className={styles.numero}>{etape.numero}</span>
            <h3>{etape.titre}</h3>
            <p>{etape.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}