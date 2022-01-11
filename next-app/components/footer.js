import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      &copy;{new Date().getFullYear()} Joe&apos;s Pub, LLC.
    </footer>
  );
}
