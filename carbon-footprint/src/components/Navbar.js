import Link from 'next/link'
import { FaLeaf } from 'react-icons/fa'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <FaLeaf className={styles.logoIcon} />
        <span>Carbon Footprint</span>
      </Link>

      <div className={styles.links}>
        <Link href="/calculateur">Calculateur</Link>
        <Link href="/calculateur" className={styles.btnNav}>
          Calculer mon empreinte
        </Link>
      </div>
    </nav>
  )
}