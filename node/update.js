const fs = require("fs");
const axios = require("axios");
const path = require('path');

const access_key = require(path.join("..", "static", "data", "access_keys.json")).access_key
const originalData = require(path.join("..", "static", "data", "chemistrycocktails_production.json"))
const verifyData = JSON.stringify(originalData)
const exclude = require("./exclude.json")

async function getDatafromIG(access_key) {
  const url = "https://graph.instagram.com/me/media?fields=id,permalink,media_type,media_url,caption,timestamp&access_token=" + access_key;
  const getData = async url => {
    try {
      const response = await axios.get(url)
      const data = response.data
      return await data
    } catch(error) {
      console.log(error)
    }
  };
  return await getData(url);
}

getDatafromIG(access_key).then(data => {
  const newData = data.data

  function isExcluded(excluded, permalink) {
    for (i=0; i<excluded.permalink.length; i++){
      if (excluded.permalink[i].includes(permalink)){
        return true
      };
    };
    return false
  }

  function sortJSON(data) {
    data.sort(function(a,b){
      return new Date(b.timestamp) - new Date(a.timestamp)
    });
    return data
  }

  // Filter items as needed before adding
  for (let i=0; i < newData.length; i++) {
    let item = newData[i]
    if (item.media_type == "IMAGE" &&
        !item.caption.includes("#regrann") &&
        !item.caption.includes("#midweek") &&
        !isExcluded(exclude, item.permalink) &&
        item.timestamp > originalData[0].timestamp)
    {
      originalData.push(item)
    };
    if (i === newData.length - 1) {
      const path = "../static/data/chemistrycocktails_production.json"
      const result = JSON.stringify(sortJSON(originalData))
      if (verifyData === result){
        console.log("Posts already up to date!")
        console.log("Most recent post date: " + JSON.stringify(originalData[0].timestamp));
      } else {
        fs.writeFile(path, result, (err => {
          if (err){
            throw err
          } else {
          console.log("Sucess! Updated file " + path);
          console.log("Most recent post date: " + JSON.stringify(originalData[0].timestamp))
          };
        }))
      };
    };
  };
})
