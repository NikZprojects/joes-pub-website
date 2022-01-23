// export default function Menu() {
//   return (
//     <div
//       style={{
//         minHeight: "80vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       This page is coming soon!
//     </div>
//   );
// }
import Link from "next/link";
import styles from "../../styles/Menu.module.css";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.container}>
        <h2>Our Menu</h2>
        <Link href="/menu/classic_cocktails">
          <p className={styles.link}>Classic Cocktails</p>
        </Link>
        <Link href="/menu/pirated_cocktails">
          <p className={styles.link}>Pirated Cocktails</p>
        </Link>
        <Link href="/menu/original_cocktails">
          <p className={styles.link}>Original Cocktails</p>
        </Link>
        <Link href="/menu/premium_cocktails">
          <p className={styles.link}>Premium Cocktails</p>
        </Link>
        <Link href="/menu/shots">
          <p className={styles.link}>Shots</p>
        </Link>
        <br></br>
        <Link href="/menu/virgin_cocktails">
          <p className={styles.link}>Virgin Cocktails</p>
        </Link>
        <Link href="/menu/suggested_cocktails">
          <p className={styles.link}>Suggested Cocktails</p>
        </Link>
        <Link href="/menu/create_your_own">
          <p className={styles.link}>Create Your Own Adventure</p>
        </Link>
      </div>
    </div>
  );
}
