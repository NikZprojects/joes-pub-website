import styles from "../styles/Home.module.css";
import Image from "next/image";
// import logo from "../public/JPsLogo.svg";
import logo from "../public/JPsLogo2.png"; // includes year established

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to</h1>
        <div className={styles.logoContainer}>
          <Image className={styles.logo} src={logo} alt="Splash Logo" />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className={styles.locationsContainer}>
              <h2>New York&nbsp;&nbsp;&nbsp;Delaware</h2>
              <h2>Aarhus-Denmark</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
