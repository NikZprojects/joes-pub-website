import styles from "../styles/Home.module.css";
import { EmblaCarousel } from "../components/carousel";

const IntroImages = [
  "/IntroPage/BinghamtonBarv1.jpg",
  "/IntroPage/BinghamtonBarv2.jpg",
  "/IntroPage/AarhusBar.jpg",
  "/IntroPage/WilmingtonBar.jpg",
];

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
        <div className="slideshow">
          <EmblaCarousel
            images={IntroImages}
            alt={"Joe's Pub through the years."}
          />
        </div>
        <p style={{ textAlign: "center", margin: "10px 0 20px 0" }}>
          Joe&apos;s Pub has had the pleasure in competing in several cocktail
          competitions.
        </p>

        <div className="competitionImages">
          <div className={styles.row}>
            <div className={styles.column}>
              <img
                src="/IntroPage/ArtsChristmasParty.png"
                alt="Art's Christmas Party Competition"
              />
            </div>
            <div className={styles.column}>
              <img src="/IntroPage/iSquareContest.jpg" alt="iSquare Contest" />
            </div>
          </div>
        </div>
        <p>
          Above all, we promote an atmosphere of fun and jovial merriment where
          everyone knows your name and everyone feels at home. Libations are
          great in their own right, but a community to enjoy together built on
          mutual respect and interest can&apos;t be beaten.
        </p>
        <h2> Personnel</h2>
        <p>Joseph A. Izzo – Proprietor, master mixologist, creative genius</p>
        <p>
          Stephen A. Izzo – Procurement specialist, chief cook and bottle washer
        </p>
        <p>Nikolas J. Zagarella – Webmaster</p>
        <p>Saptarshi Ghosh – Resident bum</p>
        <h2>Tips</h2>
        <p>
          Tips to Joe's Pub may be made via Venmo to the username{" "}
          <a
            href="https://account.venmo.com/u/joespub"
            target="_blank"
            className={styles.link}
          >
            @joespub
          </a>
          .
        </p>
      </div>
    </div>
  );
}
