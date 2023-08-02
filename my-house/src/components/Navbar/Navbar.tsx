import Link from "next/link";
import styles from "./Navbar.module.scss"


const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
    <Link href={"/"} className={styles.Navbar__logo}>Logo</Link>
    <ul className={styles.Navbar__list}>
      <li className={styles.Navbar__link}><Link href={"./Finances"}>Finances</Link></li>
      <li className={styles.Navbar__link}><Link href={"./Food"}>Food</Link></li>
      <li className={styles.Navbar__link}><Link href={"./TODO-list"}>TODO Lists</Link></li>
      <li className={styles.Navbar__link}><Link href={"./Calendar"}>Calendar</Link></li>
    </ul>
    <form>
      <input type="text" placeholder="login"/>
      <input type="password" placeholder="password"/>
      <button type="submit">Log In</button>
    </form>
  </nav>
  )
}

export default Navbar