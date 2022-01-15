import styles from "../styles/Home.module.css";
// import Image from "next/image";
// import logo from "../public/JPsLogo.svg";
// import logo from "../public/JPsLogo2.png"; // includes year established

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to</h1>
        <div className={styles.logoContainer}>
          <img
            className={styles.logo}
            src="/JPsLogo2.png"
            alt="Splash Logo"
            styles={{ minWidth: 500 }}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className={styles.locationsContainer}>
              <h2>New York&nbsp;&nbsp;&nbsp;Delaware</h2>
              <h2>&nbsp;Aarhus-Denmark</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
