import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaLeaf, FaBars, FaTimes, FaHome, FaCalculator, FaInfoCircle, FaSignOutAlt } from 'react-icons/fa'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  const router = useRouter()
  const [menuOuvert, setMenuOuvert] = useState(false)

  // pour savoir sur quelle page on est (lien actif)
  const isActive = (path) => router.pathname === path

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <FaLeaf className={styles.logoIcon} />
        <span>Carbon Footprint</span>
      </Link>

      {/* menu desktop */}
      <div className={styles.links}>
        <Link
          href="/"
          className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
        >
          <FaHome />
          <span>Accueil</span>
        </Link>
        <Link
          href="/calculateur"
          className={`${styles.navLink} ${isActive('/calculateur') ? styles.active : ''}`}
        >
          <FaCalculator />
          <span>Calculateur</span>
        </Link>
        <Link
          href="/#comment-ca-marche"
          className={styles.navLink}
        >
          <FaInfoCircle />
          <span>À propos</span>
        </Link>
        <Link href="/" className={styles.btnDeconnexion}>
          <FaSignOutAlt />
          <span>Déconnexion</span>
        </Link>
      </div>

      {/* bouton hamburger pour mobile */}
      <button
        className={styles.hamburger}
        onClick={() => setMenuOuvert(!menuOuvert)}
      >
        {menuOuvert ? <FaTimes /> : <FaBars />}
      </button>

      {/* menu mobile */}
      {menuOuvert && (
        <div className={styles.mobileMenu}>
          <Link href="/" onClick={() => setMenuOuvert(false)}>
            <FaHome /> Accueil
          </Link>
          <Link href="/calculateur" onClick={() => setMenuOuvert(false)}>
            <FaCalculator /> Calculateur
          </Link>
          <Link href="/#comment-ca-marche" onClick={() => setMenuOuvert(false)}>
            <FaInfoCircle /> À propos
          </Link>
          <Link href="/" className={styles.mobileDeconnexion} onClick={() => setMenuOuvert(false)}>
            <FaSignOutAlt /> Déconnexion
          </Link>
        </div>
      )}
    </nav>
  )
}