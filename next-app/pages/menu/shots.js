import styles from "../../styles/Menu.module.css";
import Link from "next/link";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.container}>
        <Link href="/menu">
          <p className={styles.link}>{"ᐸ Menu"}</p>
        </Link>
        <h1 className="c9" id="h.u6rsqql2oi08">
          <span className="c18 c2">Shots</span>
        </h1>
        <p className="c4">
          <span className="c0">
            If you came to consume minimal amounts of liquid but maximum amounts
            of alcohol, this is the section for you. Some are classic, some are
            pirated, and some are original, but all are potent.
          </span>
        </p>
        <p className="c4">
          <span className="c0">&nbsp;</span>
        </p>
        <h2 className="c8" id="h.2vtsqdxxpqaa">
          <span className="c10 c2">Party Shots</span>
        </h2>
        <p className="c4">
          <span className={styles.title}>The All American</span>
          <span>&nbsp; </span>
          <span className="c3">
            Grenadine, bourbon, peach schnapps, blue raspberry vodka,
            Everclear&reg; (Flaming)
          </span>
        </p>
        <p className="c4">
          <span className={styles.title}>Katy Perry</span>
          <span>&nbsp; </span>
          <span className="c3">Cinnamon schnapps, cr&egrave;me de menthe</span>
        </p>
        <p className="c4">
          <span className="c3">&nbsp;</span>
        </p>
        <h2 className="c8" id="h.cx86z6839eif">
          <span className="c10 c2">The Three Musketeers Series</span>
        </h2>
        <p className="c4">
          <span className={styles.title}>The Aramis</span>
          <span>&nbsp; </span>
          <span className="c3">
            Sour apple schnapps, J&auml;germeister&reg;
          </span>
        </p>
        <p className="c4">
          <span className={styles.title}>The Athos</span>
          <span>&nbsp; </span>
          <span className="c3">Bourbon, sloe gin, blue curacao, bitters</span>
        </p>
        <p className="c4">
          <span className={styles.title}>The Porthos</span>
          <span>&nbsp; </span>
          <span className="c3">Key lime pie vodka, peach schnapps</span>
        </p>
        <p className="c4">
          <span className={styles.title}>The D&rsquo;Artagnan</span>
          <span>&nbsp; </span>
          <span className="c3">Butterscotch schnapps</span>
        </p>
        <p className="c4">
          <span className={styles.title}>The Wench</span>
          <span>&nbsp; </span>
          <span className="c3">Spiced rum, coffee liqueur</span>
        </p>
        <p className="c4">
          <span className="c3">&nbsp;</span>
        </p>
        <h2 className="c8" id="h.zgj1x3jd3fxn">
          <span className="c10 c2">For the Sweet Tooth</span>
        </h2>
        <p className="c4">
          <span className={styles.title}>Banana Cream Pie</span>
          <span>&nbsp; </span>
          <span className="c3">
            Banana liqueur, vanilla vodka, hazelnut liqueur
          </span>
        </p>
        <p className="c4">
          <span className={styles.title}>Buttery Nipple</span>
          <span>&nbsp; </span>
          <span className="c3">
            Vanilla vodka, butterscotch schnapps, Irish cream
          </span>
        </p>
        <p className="c4">
          <span className={styles.title}>Chocolate-covered Cherry</span>
          <span>&nbsp; </span>
          <span className="c3">
            Vanilla vodka, amaretto, cr&egrave;me de cocoa, coffee liqueur,
            grenadine
          </span>
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
