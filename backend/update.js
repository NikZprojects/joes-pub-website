const fs = require("fs");
const axios = require("axios");
const path = require("path");
const time = new Date();
require("dotenv").config({ path: "../.env" });
const newData = [];

const access_key = process.env.IG_ACCESS_TOKEN;
const originalData = require("./data/chemistrycocktails_production.json");

const verifyData = JSON.stringify(originalData);
const exclude = require("./exclude.json");
var url =
  "https://graph.instagram.com/me/media?fields=id,permalink,media_type,media_url,caption,timestamp&access_token=" +
  access_key;

function isExcluded(excluded, permalink) {
  for (i = 0; i < excluded.permalink.length; i++) {
    if (excluded.permalink[i].includes(permalink)) {
      return true;
    }
  }
  return false;
}

function sortJSON(data) {
  data.sort(function (a, b) {
    return new Date(b.timestamp) - new Date(a.timestamp);
  });
  return data;
}

async function getDatafromIG(access_key, url) {
  const getData = async (url) => {
    for (let tries = 5; tries > 0; tries--) {
      try {
        const response = await axios.get(url);
        const data = response.data;
        return await data;
      } catch (error) {
        if (tries === 1) {
          console.log(error);
        } else {
          console.log("Request failed. Retrying...");
        }
      }
    }
  };
  return await getData(url);
}

function filterImage(item) {
  if (
    (item.media_type == "IMAGE" || item.media_type == "CAROUSEL_ALBUM") &&
    !item.caption.includes("#regrann") &&
    !item.caption.includes("#midweek") &&
    !item.caption.includes("#repost") &&
    !isExcluded(exclude, item.permalink)
  ) {
    return item;
  }
}

function writeJSON(JSONdata) {
  const result = JSON.stringify(sortJSON(JSONdata));
  if (verifyData === result) {
    console.log("Posts already up to date!");
    console.log(
      "Most recent post date: " + JSON.stringify(JSONdata[0].timestamp)
    );
  } else {
    const path =
      "./data/chemistrycocktails_production.json";
    fs.writeFile(path, result, (err) => {
      if (err) {
        throw err;
      } else {
        console.log("Sucess! Updated file " + path);
        console.log(
          "Most recent post date: " + JSON.stringify(JSONdata[0].timestamp)
        );
      }
    });
  }
}

function updateJSONfromIG(access_key, url) {
  getDatafromIG(access_key, url).then((data) => {
    let page_data = data.data;
    for (let i = 0; i < page_data.length; i++) {
      let item = filterImage(page_data[i]);
      if (item) newData.push(item);
    }
    if (data.paging.next !== undefined) {
      const new_url = data.paging.next;
      updateJSONfromIG(access_key, new_url);
    } else {
      writeJSON(newData);
    }
  });
}

console.log(
  "\n\n" +
    time.toLocaleString("en-US", { timeZone: "America/New_York" }) +
    " EST:\n"
);
updateJSONfromIG(access_key, url);
