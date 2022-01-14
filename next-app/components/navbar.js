import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/android-chrome-192x192.png";
// import logo from "../public/JPsLogo.svg";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image
              className={styles.logo}
              src={logo}
              alt="Navbar logo"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <Link href="/About">
          <h1>About</h1>
        </Link>
        <Link href="/Digital_Menu">
          <h1>Menu</h1>
        </Link>

        <Link href="/Instagram">
          <h1>Instagram</h1>
        </Link>

        <Link href="/Recipes">
          <h1>Recipes</h1>
        </Link>
      </div>
    </div>
  );
}
