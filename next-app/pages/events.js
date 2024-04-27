import styles from "../styles/Home.module.css";

const eventImages = ["Tequila Poster"];

export default function Recipes() {
  return (
    <div
      className={styles.about}
      style={{ flexWrap: "wrap", justifyContent: "flex-start" }}
    >
      <div className={styles.container}>
        <h2>Our Events</h2>
      </div>
      <div
        style={{
          width: "100vw",
        }}
      >
        {eventImages.map((item) => (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <img
              src={`/Events/${item}.jpg`}
              alt={"Event Poster"}
              style={{
                width: "min(95vw,800px)",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
