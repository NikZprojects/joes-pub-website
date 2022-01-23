import styles from "../styles/Navbar.module.css";
import Link from "next/link";
// import Image from "next/image";
// import logo from "../public/android-chrome-192x192.png";
// import logo from "../public/JPsLogo.svg";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <img
              className={styles.logo}
              src="/android-chrome-192x192.png"
              alt="Navnpbar logo"
              width={50}
            />
          </Link>
        </div>
        <Link href="/about">
          <h1>About</h1>
        </Link>
        <Link href="/menu">
          <h1>Menu</h1>
        </Link>

        <Link href="/instagram">
          <h1>Instagram</h1>
        </Link>

        <Link href="/recipes">
          <h1>Recipes</h1>
        </Link>
      </div>
    </div>
  );
}
