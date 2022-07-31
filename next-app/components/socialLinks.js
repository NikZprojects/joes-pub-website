import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <div className={styles.SocialContainer}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <a
        href="mailto:joespub.xyz@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="fa fa-email"
      >
        <img src="/Icons/email-icon.svg" className={styles.email} />
      </a>
      <span className={styles.innerSocialContiainer}>
        <a
          href="https://www.instagram.com/joespub.xyz/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialLinks} fa fa-instagram`}
        />
        <a
          href="https://twitter.com/joespubxyz"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialLinks} fa fa-twitter`}
        />
        <a
          href="https://www.facebook.com/chemistry.cocktails"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialLinks} fa fa-facebook`}
        />
      </span>
      <a
        href="https://craftedpour.com/contributors?id=2StFdHKFtNgJQjdqO4avWpRm5Nq1"
        target="_blank"
        rel="noopener noreferrer"
        className="fa fa-crafted-pour"
      >
        <img src="/Icons/crafted-pour.png" className={styles.craftedPour} />
      </a>
    </div>
  );
}
