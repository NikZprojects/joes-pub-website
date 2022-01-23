import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <h2>Our Story</h2>
        <p>
          Joe&apos;s Pub started with a boy fascinated by the prospect of
          mixology. So many liquors, liqueurs, and mixers. So many combinations,
          ratios, and methods. So many glimmering, gleaming, glinting glasses.
          Scooped up in the romanticism, what was once a simple hobby, evolved
          into an outright obsession. With more bottles of alcohol than he had
          friends, our hero decided to take the knowledge he had learned and the
          skills he had accrued and present it all to the masses. He was no
          longer the starry-eyed dreaming boy who began this journey, now he was
          a man; more than that, he was a bartender.
        </p>
        <p>
          Eventually, life took Joe on a harrowing adventure across the US and
          across the world. Joe&apos;s Pub has proudly served cocktails in
          Rochester, NY; Binghamton, NY; Aarhus, Denmark; and Wilmington, DE,
          all the while spreading smiles, enjoyment, and quality entertainment.
        </p>
        <div className="slideshow"></div>
        Joe&apos;s Pub has had the pleasure in competing in invited several
        cocktail competitions.
        <div className="images"></div>
        <p>
          Above all, we promote an atmosphere of fun and jovial merriment where
          everyone knows your name and everyone feels at home. Libations are
          great in their own right, but a community to enjoy together built on
          mutual respect and interest can&apos;t be beaten.
        </p>
        <h2>Rules</h2>
        <ul>
          <li>
            Joe&apos;s Pub is a place where people can gather and have fun, if
            anything threatens that, it will be removed.
          </li>
          <li>
            We work on the honor system. We do not check IDs, but expect that
            all of our patrons are honest about their legal age.
          </li>
          <li>
            There is no last call, but everybody must be gone or going by 12:20
            AM (local time)
          </li>
          <li>
            We do not condone inebriated driving. Accommodations may be provided
            at our sister establishment—Joe&apos;s Lounge—for anyone who seems
            incapable of operating a motor vehicle.
          </li>
          <li> The bartender&apos;s decision is always final</li>
        </ul>
        <h2> About Our Prices</h2>
        <p>
          Everything is for sale.... for the right price. We charge enough to
          breakeven. Not looking to turn a profit, not looking to rip anyone
          off, we just want some compensation for what we use.
        </p>
        <p>
          Discounts, coupons, and special tastings are available, but granted at
          the bartender&apos;s discretion. Chores, tasks, and odd jobs can be
          used for coupons or credits.
        </p>
        <p>
          No compensation is required if your legal surname is, or may become,
          “Izzo”.
        </p>
        <p>
          {" "}
          Payment may be made in the form of cash, via Venmo to the username
          @emubob59, or PayPal to jaizzo92@gmail.com.
        </p>
        <p>
          {" "}
          If you don’t have means to pay readily available, a tab can be started
          and paid off at a later date, but this tab cannot exceed 10 USD or 65
          DKK.
        </p>
        <p>
          Money can be pre-paid and recorded by the bartender, but refunds are
          not available.
        </p>
        <p>First visit is free.</p>
        <h2> Personnel</h2>
        <p>Joseph A. Izzo – Proprietor, master mixologist, creative genius</p>
        <p>
          Stephen A. Izzo – Procurement specialist, chief cook and bottle washer
        </p>
        <p>Nikolas J. Zagarella – Webmaster</p>
        <p>Saptarshi Ghosh – Resident bum</p>
      </div>
    </div>
  );
}
