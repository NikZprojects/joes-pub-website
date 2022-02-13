import styles from "../../styles/Menu.module.css";
import Link from "next/link";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.container}>
        <Link href="/menu">
          <p className={styles.link}>{"ᐸ Menu"}</p>
        </Link>
        <h1 className="c9" id="h.yvinyybf6zny">
          <span className="c2 c18">Pirated Cocktails</span>
        </h1>
        <p className="c4">
          <span className="c0">
            These are cocktails I stole. I remember many of their origins, but
            some have been lost to time. I found these recipes on my travels
            through bars, resultants, back alleys, and illegitimate poker games.
            Most of them came only with a list of ingredients and I was left to
            find the ratios. Some I altered to improve.
          </span>
        </p>
        <p className="c4">
          <span className="c0">&nbsp;</span>
        </p>
        <p className="c4">
          <span className={styles.title}>100 Followers</span>
          <span>&nbsp; </span>
          <span className="c3">
            100proof cinnamon schnapps, tequila, triple sec, sour mix
          </span>
        </p>
        <p className="c4">
          <span className={styles.title}>Blue Hawaiian</span>
          <span>&nbsp; </span>
          <span className="c3">White rum, blue curacao, pineapple juice</span>
        </p>
        <p className="c4">
          <span className={styles.title}>Cinnamon Toast Crunch</span>
          <span className="c15">&reg;</span>
          <span>&nbsp; </span>
          <span className="c3">Cinnamon whiskey, Rumchata&reg;</span>
        </p>
        <p className="c4">
          <span className={styles.title}>Da Mix</span>
          <span>&nbsp; </span>
          <span className="c3">
            Whiskey, sweet and dry vermouth, cherry syrup
          </span>
        </p>
        <p className="c4">
          <span className={styles.title}>Elder Greyhound</span>
          <span>&nbsp; </span>
          <span className="c3">
            Vodka, Elderflower liqueur, grapefruit juice
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
          <span className={styles.title}>Not Tonight, Satan</span>
          <span>&nbsp; </span>
          <span className="c3">
            Bourbon, peach schnapps, maple syrup, chili powder, peach bitters
          </span>
        </p>
        <p className="c4">
          <span className={styles.title}>The Nutty Preacher-man</span>
          <span>&nbsp; </span>
          <span className="c3">
            Whiskey, dry vermouth, hazelnut liqueur, black walnut bitters
          </span>
        </p>
        <p className="c4">
          <span className={styles.title}>Sex on the Beach in the Winter</span>
          <span>&nbsp; </span>
          <span className="c3">
            Vodka, coconut rum, peach schnapps, pineapple and cranberry juice,
            cream of coconut
          </span>
        </p>
        <p className="c4">
          <span className={styles.title}>Snickerdoodle</span>
          <span>&nbsp; </span>
          <span className="c3">
            Amaretto, butterscotch schnapps, Irish cream, cinnamon
          </span>
        </p>
        <p className="c4">
          <span className={styles.title}>Toasted almond</span>
          <span>&nbsp; </span>
          <span className="c3">Amaretto, coffee liqueur, heavy cream</span>
        </p>
      </div>
    </div>
  );
}
