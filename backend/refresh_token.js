const fs = require("fs");
const axios = require("axios");
require("dotenv").config({ path: "../.env" });
const time = new Date();

const old_token = process.env.IG_ACCESS_TOKEN;

async function getDatafromIG(access_key) {
  const url =
    "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=" +
    access_key;
  const getData = async (url) => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      return await data;
    } catch (error) {
      console.log(error);
    }
  };
  return await getData(url);
}

getDatafromIG(old_token).then((data) => {
  const new_token = data.access_token;
  const expires = new Date(time.getTime() + data.expires_in * 1000);
  const path = "../.env";
  console.log(data);
  const output = `IG_ACCESS_TOKEN = "${new_token}"`;

  fs.writeFile(path, output, (err) => {
    if (err) {
      throw err;
    } else {
      console.log(
        "\n\n" +
          time.toLocaleString("en-US", { timeZone: "America/New_York" }) +
          " EST:\n"
      );
      console.log("Sucess! Instagram access token is now up-to-date.");
      console.log("Access token will expire: " + expires);
    }
  });
});
