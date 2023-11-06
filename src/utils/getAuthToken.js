import axios from "axios";
import dotenv from 'dotenv'

dotenv.config()
// Need to check for expiry of token before request for new one.

export const getAuthToken = async () => {
  try {
    const { data } = await axios.post(
      "https://oauth.cimpress.io/v2/token",
      {
        grant_type: "client_credentials",
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        audience: "https://api.cimpress.io/",
      },
      { headers: { "content-type": "application/json" } }
    );

    return data.access_token;
  } catch (err) {
    console.log(err);
  }
};
