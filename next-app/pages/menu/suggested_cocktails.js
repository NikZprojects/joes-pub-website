import styles from "../../styles/Menu.module.css";
import Link from "next/link";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.container}>
        <Link href="/menu">
          <p className={styles.link}>{"ᐸ Menu"}</p>
        </Link>
        <h1 className="c9" id="h.lycsbtc7sl97">
          <span className="c18 c2">Suggested Cocktails</span>
        </h1>
        <p className="c4">
          <span className="c0">
            If you&rsquo;re new to our establishment and a little overwhelmed by
            the menu, here are some favorite cocktails from our regulars.
          </span>
        </p>
        <p className="c4">
          <span className="c0">&nbsp;</span>
        </p>
        <p className="c4">
          <span className={styles.title}>Grasshopper</span>
          <span>&nbsp; </span>
          <span className="c3">
            Cr&egrave;me de cocoa, cr&egrave;me de menthe, half-and-half
          </span>
        </p>
        <p className="c4">
          <span className={styles.title}>Liquid Nutella</span>
          <span>&nbsp; </span>
          <span className="c3">
            Vanilla vodka, Rumchata&reg;, Nutella&reg;, half-and-half, chocolate
            syrup
          </span>
        </p>
        <p className="c4">
          <span className={styles.title}>Mama&rsquo;s Moscow Mule</span>
          <span>&nbsp; </span>
          <span className="c3">
            Vodka, peach schnapps, lime juice, ginger syrup, club soda
          </span>
        </p>
        <p className="c4">
          <span className={styles.title}>Old Fashioned</span>
          <span>&nbsp; </span>
          <span className="c3">Whiskey, sugar, bitters</span>
        </p>
        <p className="c4">
          <span className={styles.title}>Snickerdoodle</span>
          <span>&nbsp; </span>
          <span className="c3">
            Amaretto, butterscotch schnapps, Irish cream, cinnamon
          </span>
        </p>
        <p className="c4">
          <span className={styles.title}>Tom Collins</span>
          <span>&nbsp; </span>
          <span className="c3">Gin, lemon juice, simple syrup, club soda</span>
        </p>
        <p className="c4">
          <span className={styles.title}>Virgin Rum &amp; Coke</span>
          <span>&nbsp; </span>
          <span className="c3">Coke</span>
        </p>
        <p className="c13 c6">
          <span className="c14 c2"></span>
        </p>
        <p className="c4">
          <span className="c14 c2">&nbsp;</span>
        </p>
      </div>
    </div>
  );
}
