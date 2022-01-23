// export default function About() {
//   return (
//     <div
//       style={{
//         minHeight: "80vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       This page is coming soon!
//     </div>
//   );
// }

import styles from "../styles/Home.module.css";

export default function Recipes() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <h2>Our Recipes</h2>
        <p>
          There’s no replacement for hand-crafted, homemade, and personalized
          ingredients. This is a list of the recipes for the syrups, bitters,
          mixers, and additives we use at Joe’s Pub to make your cocktails a
          memorable experience.
        </p>

        <h2 style={{ textDecorationLine: "underline" }}>
          ⬡JP’s Original Grenadine⬡
        </h2>
        <ul>
          <li>2 C granulated sugar</li>
          <li>1 C pomegranate juice</li>
          <li>1 Tbsp Maraschino cherry juice</li>
        </ul>

        <p>
          Add ingredients in a small sauce pan and heat over medium heat,
          stirring occasionally. When solution begins to simmer, continue to
          stir for 5 min. Let cool. Transfer to a container (use a ketchup
          bottle if you want to startle people) and store in the fridge.
        </p>

        <h2 style={{ textDecorationLine: "underline" }}>
          ⬡JP’s Original Ginger Syrup⬡
        </h2>
        <ul>
          <li>¼ C peeled and diced ginger</li>
          <li>1 C water</li>
          <li>1 C granulated sugar</li>
          <li>¼ vanilla bean</li>
        </ul>

        <p>
          Add ingredients in a small sauce pan and heat over medium heat,
          stirring occasionally. Bring to a rolling boil. Reduce to a simmer for
          15-20 min. Cool. Strain. Transfer to a container and store in the
          fridge.
        </p>
      </div>
    </div>
  );
}
