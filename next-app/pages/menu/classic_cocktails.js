import styles from "../../styles/Menu.module.css";
import Link from "next/link";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.container}>
        <Link href="/menu">
          <p className={styles.link}>{"ᐸ Menu"}</p>
        </Link>
        <h1 className="c9" id="h.9j05bcj86n2z">
          <span className="c18 c2">Classic Cocktails</span>
        </h1>
        <p className="c4">
          <span className="c0">
            These are the cocktails that you can order in most any bar. They
            range from the simple to the complex. Most are well-publicized in
            the media and at bars. All of them are classics in their own right.
          </span>
        </p>
        <p className="c5">
          <span className="c0">&nbsp;</span>
        </p>
        <p className="c4">
          <span className={styles.title}>Cosmopolitan</span>
          <span>&nbsp; </span>
          <span className="c3">
            Vodka, triple sec, lime juice, cranberry juice
          </span>
        </p>
        <p className="c4">
          <span className={styles.title}>Gin &amp; Tonic</span>
          <span>&nbsp; </span>
          <span className="c3">Gin, tonic water</span>
        </p>
        <p className="c4">
          <span className={styles.title}>Grasshopper</span>
          <span>&nbsp; </span>
          <span className="c3">
            Vanilla vodka, green cr&egrave;me de menthe, white cr&egrave;me de
            cocoa, half-and-half
          </span>
        </p>
        <p className="c4">
          <span className={styles.title}>Mai Tai</span>
          <span>&nbsp; </span>
          <span className="c3">
            White and dark rum, triple sec, orgeat syrup, lime juice, lemon
            juice
          </span>
        </p>
        <p className="c4">
          <span className={styles.title}>Margarita</span>
          <span>&nbsp; </span>
          <span className="c3">
            Tequila, Cointreau&reg;, lime juice, salted rim
          </span>
        </p>
        <p className="c4">
          <span className={styles.title}>Mint Julep</span>
          <span>&nbsp; </span>
          <span className="c3">Bourbon, simple syrup, mint</span>
        </p>
        <p className="c4">
          <span className={styles.title}>Old Fashioned</span>
          <span>&nbsp; </span>
          <span className="c3">Whiskey, sugar, bitters</span>
        </p>
        <p className="c4">
          <span className={styles.title}>Pi&ntilde;a Colada</span>
          <span>&nbsp; </span>
          <span className="c3">
            White rum, pineapple juice, cream of coconut (frozen or on the
            rocks)
          </span>
        </p>
        <p className="c4">
          <span className={styles.title}>Primrose</span>
          <span>&nbsp; </span>
          <span className="c3">
            Gin, Aperol&reg;, Elderflower liqueur, lime juice
          </span>
        </p>
        <p className="c4">
          <span className={styles.title}>Rum &amp; Coke</span>
          <span>&nbsp; </span>
          <span className="c3">
            Spice rum, Coca-Cola&reg;, dash of vanilla extract
          </span>
        </p>
        <p className="c4">
          <span className={styles.title}>Scotch &amp; Ginger</span>
          <span>&nbsp; </span>
          <span className="c3">Scotch, ginger ale</span>
        </p>
        <p className="c4">
          <span className={styles.title}>Sex on the Beach</span>
          <span>&nbsp; </span>
          <span className="c3">
            Vodka, peach schnapps, pineapple and cranberry juice
          </span>
        </p>
        <p className="c4">
          <span className={styles.title}>Tequila Sunrise</span>
          <span>&nbsp; </span>
          <span className="c3">Tequila, orange juice, grenadine</span>
        </p>
        <p className="c4">
          <span className={styles.title}>Tom Collins</span>
          <span>&nbsp; </span>
          <span className="c3">Gin, lemon juice, simple syrup, club soda</span>
        </p>
        <p className="c4">
          <span className={styles.title}>Whiskey Sour</span>
          <span>&nbsp; </span>
          <span className="c3">
            Whiskey, simple syrup, lemon juice, egg white (egg white optional,
            but it&rsquo;s better with it)
          </span>
        </p>
        <p className="c13 c6">
          <span className="c3"></span>
        </p>
        <p className="c4">
          <span className="c3">&nbsp;</span>
        </p>
      </div>
    </div>
  );
}
