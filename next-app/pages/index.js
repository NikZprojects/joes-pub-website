import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import logo from "../public/JPsLogo.svg";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to</h1>
        <div className={styles.logoContainer}>
          <Image className={styles.logo} src={logo} alt="Splash Logo" />
        </div>
        <div className={styles.locationsContainer}></div>
      </main>
    </div>
  );
}
