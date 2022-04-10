import Link from "next/link";
import styles from "../../styles/Menu.module.css";
import useDeviceType from "../../hooks/useDeviceType.js";

export default function Menu() {
  console.log(useDeviceType());

  return (
    <div className={styles.menu}>
      <div className={styles.container}>
        <h2>Our Menu</h2>
        <div className={styles.ImagesContainer}>
          {menuItems.map((item, index) => (
            <Link href={item.href} key={index}>
              <div className={styles.ImageContainer}>
                <img src={item.src} className={styles.link} alt={item.title} />
                <div className={styles.middle}>
                  <div className={styles.text}>{item.title}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const menuItems = [
  {
    title: "Classic Cocktails",
    src: "/DigitalMenu/Classic.png",
    href: "/menu/classic_cocktails",
  },
  {
    title: "Pirated Cocktails",
    src: "/DigitalMenu/Pirates.png",
    href: "/menu/pirated_cocktails",
  },
  {
    title: "Original Cocktails",
    src: "/DigitalMenu/Original.png",
    href: "/menu/original_cocktails",
  },
  {
    title: "Premium Cocktails",
    src: "/DigitalMenu/Premium.png",
    href: "/menu/premium_cocktails",
  },
  {
    title: "Shots",
    src: "/DigitalMenu/Shots.png",
    href: "/menu/shots",
  },
  {
    title: "Virgin Cocktails",
    src: "/DigitalMenu/Virgin.png",
    href: "/menu/virgin_cocktails",
  },
  {
    title: "Suggested Cocktails",
    src: "/DigitalMenu/Suggested.png",
    href: "/menu/suggested_cocktails",
  },
  {
    title: "Create Your Own Adventure",
    src: "/DigitalMenu/Empty.png",
    // src: "/DigitalMenu/CreateYourOwn.jpg",
    href: "/menu/create_your_own",
  },
];
