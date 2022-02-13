import styles from "../../styles/Menu.module.css";
import Link from "next/link";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.container}>
        <Link href="/menu">
          <p className={styles.link}>{"ᐸ Menu"}</p>
        </Link>
        <h1 className="c9" id="h.hrk91icudb51">
          <span className="c18 c2">Original Cocktails</span>
        </h1>
        <p className="c4">
          <span className="c0">
            There are my children. Some are pure experimentation with no guide.
            Some are my personal spin on classic cocktails. Some were accidents.
            Some were divine intervention. All can only be found at Joe&rsquo;s
            Pub.
          </span>
        </p>
        <p className="c4">
          <span className="c0">&nbsp;</span>
        </p>
        <p className="c4">
          <span className={styles.title}>Cake by the Ocean</span>
          <span>&nbsp; Cake v</span>
          <span className="c3">
            Vodka, island punch schnapps, lemon-lime soda
          </span>
        </p>
        <p className="c4">
          <span className={styles.title}>The Izzo Special</span>
          <span>&nbsp; </span>
          <span className="c3">
            Tequila, gin, rum, vodka, triple sec, sour mix, Coca-Cola&reg;
          </span>
        </p>
        <p className="c4">
          <span className={styles.title}>Joe&rsquo;s Martini</span>
          <span>&nbsp; </span>
          <span className="c3">Gin, sweet and dry vermouth, olive brine</span>
        </p>
        <p className="c4">
          <span className={styles.title}>JP&rsquo;s Pi&ntilde;a Colada</span>
          <span>&nbsp; </span>
          <span className="c3">
            Coconut rum, pineapple juice, cream of coconut, lemon-lime soda
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
          <span className={styles.title}>Moji-jo</span>
          <span>&nbsp; </span>
          <span className="c3">
            White rum, simple syrup, mint, lemon-lime soda
          </span>
        </p>
        <p className="c4">
          <span className={styles.title}>A Peachy Cocktail</span>
          <span>&nbsp; </span>
          <span className="c3">
            Vodka, peach schnapps, cr&egrave;me de cassis, peach bitters, club
            soda
          </span>
        </p>
        <p className="c4">
          <span className={styles.title}>The Poor Man&rsquo;s Sidecar</span>
          <span>&nbsp; </span>
          <span className="c3">
            Brandy, triple sec, whiskey, lemon juice, simple syrup
          </span>
        </p>
        <p className="c4">
          <span className={styles.title}>Ramos Joe Fizz</span>
          <span>&nbsp; </span>
          <span className="c3">
            Gin, orange juice, cream, orange blossom water, egg white, club soda
          </span>
        </p>
        <p className="c4">
          <span className={styles.title}>Tequil-ing Me Softly</span>
          <span>&nbsp; </span>
          <span className="c3">
            Tequila, triple sec, passion fruit juice, cream soda, grenadine
          </span>
        </p>
        <p className="c4">
          <span className={styles.title}>Snyzzo</span>
          <span>&nbsp; </span>
          <span className="c3">
            Vodka, J&auml;germeister&reg;, Campari&reg;, Sprite&reg;
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
