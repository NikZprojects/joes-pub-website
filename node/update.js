const fs = require("fs");
const axios = require("axios")

const access_key = require("../static/data/access_keys.json").access_key
const originalData = require("../static/data/chemistrycocktails_production.json")
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

  const tempData = []

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
      //console.log(sortJSON(originalData))
      let path = "../static/data/chemistrycocktails_production.json"
      fs.writeFile(path, JSON.stringify(sortJSON(originalData)), err => {
        if (err) throw err;
        console.log("Sucess! Updated file " + path);
        let verifyData = require("../static/data/chemistrycocktails_production.json")
        console.log("Most recent post date: " + JSON.stringify(verifyData[0].timestamp));
      })
    };
  };
})
