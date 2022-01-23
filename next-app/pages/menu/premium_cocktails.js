import styles from "../../styles/Menu.module.css";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.container}>
        <h1 class="c9" id="h.8a3hfsb1w3r5">
          <span class="c18 c2">Premium Cocktails</span>
        </h1>
        <p class="c4">
          <span class="c0">
            As previously mentioned, our prices are only meant to cover the cost
            of the ingredients that go into our cocktails. Sometimes, those
            ingredients can be costly. Some argue the flavor is better. Some
            argue the quality of drink is improved. Some think it just looks
            fancier. Whatever the reason, these cocktails are made with
            ingredients that require a slight increase in price. If you&rsquo;re
            feeling classy, go ahead and order one for these Premium cocktails
            for just $1 extra.
          </span>
        </p>
        <p class="c4">
          <span class="c0">&nbsp;</span>
        </p>
        <p class="c4">
          <span class={styles.title}>Gulab Jamun</span>
          <span>&nbsp; </span>
          <span class="c3">Jameson Irish whiskey, cardamom syrup</span>
        </p>
        <p class="c4">
          <span class={styles.title}>Hummingbird to Mars</span>
          <span>&nbsp; </span>
          <span class="c3">
            Maker&rsquo;s Mark bourbon, demerara syrup, orange bitters
          </span>
        </p>
        <p class="c4">
          <span class={styles.title}>El Diablo</span>
          <span>&nbsp; </span>
          <span class="c3">Mezcal, cinnamon whiskey, triple sec</span>
        </p>
        <p class="c4">
          <span class={styles.title}>Naked &amp; Famous</span>
          <span>&nbsp; </span>
          <span class="c3">
            Mezcal, green Chartreuse, Aperol&reg;, demerara syrup, lime juice
          </span>
        </p>
        <p class="c4">
          <span class={styles.title}>Sidecar</span>
          <span>&nbsp; </span>
          <span class="c3">
            Cointreau&reg;, cognac, lemon juice, simple syrup
          </span>
        </p>
        <p class="c13 c6">
          <span class="c2 c14"></span>
        </p>
        <p class="c4">
          <span class="c14 c2">&nbsp;</span>
        </p>
      </div>
    </div>
  );
}
