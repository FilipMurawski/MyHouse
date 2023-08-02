import Link from "next/link";
import styles from "./Navbar.module.scss"


const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
    <Link href={"/"}>Logo</Link>
    <ul className={styles.Navbar__list}>
      <li className={styles.Navbar__link}><Link href={"/"}>Finances</Link></li>
      <li className={styles.Navbar__link}><Link href={"/"}>Food</Link></li>
      <li className={styles.Navbar__link}><Link href={"/"}>TODO Lists</Link></li>
      <li className={styles.Navbar__link}><Link href={"/"}>Calendar</Link></li>
    </ul>

  </nav>
  )
}

export default Navbar