import { useState, useEffect } from "react";
import styles from "../styles/Instagram.module.css";
import Link from "next/link";
// import Image from "next/image";
import sample_data from "../../static-site-backup/data/chemistrycocktails_production.json";
const exclude = require("../../backend/exclude.json");

const USE_PRODUCTION_DATA = true;

function isExcluded(excluded, permalink) {
  for (let i = 0; i < excluded.permalink.length; i++) {
    if (excluded.permalink[i].includes(permalink)) {
      return true;
    }
  }
  return false;
}

export default function Instagram() {
  const [state, setState] = useState({
    error: null,
    isLoaded: false,
    items: [],
  });

  const [warned, setWarned] = useState(false);
  if (
    USE_PRODUCTION_DATA &&
    process.env.NODE_ENV === "development" &&
    !warned
  ) {
    console.warn(
      "USE_PRODUCTION_DATA is enabled in /pages/instagram.js. To test data updates, set this to false instead"
    );
    setWarned(true);
  }

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!USE_PRODUCTION_DATA && process.env.NODE_ENV === "development") {
      setState({ items: sample_data, isLoaded: true });
    } else {
      fetch("https://www.nikzprojects.com/api/chemistrycocktails.json")
        .then((response) => response.json())
        .then((data) => {
          setState({ items: data, isLoaded: true });
        });
    }
  }, []);

  return (
    <div className={styles.instagram}>
      {!state.isLoaded ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.appContent}>
          <h1>Instagram Search:</h1>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => {
              setSearchTerm(
                e.target.value
                  .replace(/[\r\n'*#@]+/gm, "")
                  .toLowerCase()
                  .trim()
              );
            }}
            autoFocus
          />
          <div className={styles.imgBlock}>
            {state.items
              .filter(
                (item) =>
                  (searchTerm.includes("$") ||
                    !item.caption.includes("#midweek")) &&
                  (searchTerm.includes("$$") ||
                    (!item.caption.includes("#regrann") &&
                      !item.caption.includes("#repost") &&
                      !isExcluded(exclude, item.permalink)))
              )
              .filter((item) => {
                var searchableCaption = item.caption
                  .replace(/[\r\n'"*#@]+/gm, " ")
                  .toLowerCase();

                function matchingItems(searchTerm, item) {
                  if (
                    searchableCaption.includes(
                      " " + searchTerm.replace(/[",$]+/gm, "")
                    )
                  ) {
                    return item;
                  }
                }
                // If search bar empty:
                if (searchTerm == "") {
                  return item;
                } else {
                  // Quote search:
                  if (
                    searchTerm[0] == '"' &&
                    searchTerm[searchTerm.length - 1] == '"'
                  ) {
                    setSearchTerm(searchTerm + " ");
                    if (matchingItems(searchTerm, item)) {
                      return item;
                    }

                    // Comma search:
                  } else if (searchTerm.includes(",")) {
                    var searchTermArray = searchTerm.split(",");

                    for (let i = searchTermArray.length - 1; i >= 0; i--) {
                      let currentSearch = searchTermArray[i].trim();
                      if (!matchingItems(currentSearch, item)) {
                        break;
                      } else if (
                        matchingItems(currentSearch, item) &&
                        i === 0
                      ) {
                        return item;
                      }
                    }

                    // Search:
                  } else if (matchingItems(searchTerm, item)) {
                    return item;
                  }
                }
              })
              .map((item) => (
                <Link
                  href={item.permalink}
                  key={item.id}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    id="ig_img"
                    alt={item.caption}
                    src={item.media_url}
                    loading="lazy"
                  ></img>
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
