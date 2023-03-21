import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <Image
          className={styles.logo}
          src="/images/moveiseliane.jpg"
          width="30"
          height="30"
          alt="Eliane"
        />
        <h1>Moveis Eliane</h1>
      </div>
      <ul className={styles.link_items}>
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/sobre">Sobre</Link>
        </li>
        <li>
          <Link href="/moveis">Moveis</Link>
        </li>
      </ul>
    </nav>
  );
}
