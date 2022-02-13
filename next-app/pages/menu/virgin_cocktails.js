import styles from "../../styles/Menu.module.css";
import Link from "next/link";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.container}>
        <Link href="/menu">
          <p className={styles.link}>{"ᐸ Menu"}</p>
        </Link>
        <h1 class="c9" id="h.e7awalhil8kx">
          <span class="c18 c2">Virgin Cocktails</span>
        </h1>
        <p class="c4">
          <span>
            Whether you are the DD or in AA, whether you don&rsquo;t like the
            taste of alcohol or you don&rsquo;t like the taste of hangover,
            whether you think alcohol is the demon&rsquo;s bathwater or you just
            like to uphold the 18
          </span>
          <span class="c12">th</span>
          <span class="c0">
            &nbsp;amendment to the United States Constitution, these cocktails
            are for you.
          </span>
        </p>
        <p class="c4">
          <span class="c0">&nbsp;</span>
        </p>
        <p class="c4">
          <span class={styles.title}>Cherries from Heaven</span>
          <span>&nbsp; </span>
          <span class="c3">
            Maraschino cherry syrup, sour mix, old fashioned bitters
          </span>
        </p>
        <p class="c4">
          <span class={styles.title}>Creamsicle</span>
          <span>&nbsp; </span>
          <span class="c3">Orange juice, half-and-half, orange bitters</span>
        </p>
        <p class="c4">
          <span class={styles.title}>Egg cream</span>
          <span>&nbsp; </span>
          <span class="c3">Half-and-half, vanilla extract, club soda</span>
        </p>
        <p class="c4">
          <span class={styles.title}>Roy Rogers</span>
          <span>&nbsp; </span>
          <span class="c3">Cola, grenadine</span>
        </p>
        <p class="c4">
          <span class={styles.title}>Shirley Temple</span>
          <span>&nbsp; </span>
          <span class="c3">Ginger ale, grenadine</span>
        </p>
        <p class="c4">
          <span class={styles.title}>Sparkling Lemonade</span>
          <span>&nbsp; </span>
          <span class="c3">Lemon juice, simple syrup, club soda</span>
        </p>
        <p class="c4">
          <span class={styles.title}>Virgin Rum &amp; Coke</span>
          <span>&nbsp; </span>
          <span class="c3">Coke</span>
        </p>
        <p class="c13 c6">
          <span class="c14 c2"></span>
        </p>
        <p class="c4">
          <span class="c14 c2">&nbsp;</span>
        </p>
      </div>
    </div>
  );
}
