//*** This is probably not needed, but keeping it as a back up *** ///
// This was an attempt to generate a new access token, but this should be performed in the Meta portal instead (after logging in)

import axios from "axios";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

// async function getCode(appID) {
//   console.log(appID, appSecret);
//   if (!appID || !appSecret) return `No App ID, recieved: ${appID}`;
//   const url = `https://api.instagram.com/oauth/authorize?client_id=${appID}&redirect_uri=https://joespub.xyz&scope=user_profile,user_media&response_type=string`;
//   const config = {
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//   };

//   const getData = async (url) => {
//     try {
//       const response = await axios.get(url, config);
//       const data = response.data;
//       return await data;
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return await getData(url);
// }

// const appID = process.env.APP_ID;
// const appSecret = process.env.APP_SECRET;

// // first run getCode, get the code by looking for logger_id=___
// console.log("Getting Code");
// const code = await getCode(appID);
// console.log(code);

// then update .env with the code, then run getAccessToken:
async function getAccessToken(appID, appSecret) {
  const appCode = process.env.APP_CODE;
  console.log(appID, appSecret, appCode);
  let url = "https://api.instagram.com/oauth/access_token?";

  try {
    const paramKeys = {
      client_id: appID,
      client_secret: appSecret,
      grant_type: "authorization_code",
      redirect_uri: "https://joespub.xyz",
      code: appCode,
    };
    const params = new URLSearchParams();

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    for (const [key, val] of Object.entries(paramKeys)) {
      params.append(key, val);
    }
    console.log(url);
    const response = await axios.post(url, params, config);
    console.log(response);
  } catch (err) {
    console.log(err?.response?.data || err);
  }
}

console.log("AccessToken Result:");
getAccessToken(appID, appSecret);
console.log("Make sure to update this value in the .env file.");
