import { FaLeaf, FaGithub, FaLinkedin } from 'react-icons/fa'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.brand}>
          <FaLeaf />
          <span>Carbon Footprint</span>
        </div>
        <p className={styles.desc}>
          Calcule ton empreinte carbone et agis pour la planète.
        </p>
        <div className={styles.socials}>
          <a href="https://github.com/Belly2001" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
        <p className={styles.copy}>
          © 2026 Don Belly Star NDANGA — Projet universitaire L3 MIASHS
        </p>
      </div>
    </footer>
  )
}