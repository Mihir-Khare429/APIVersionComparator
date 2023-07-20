import axios from "axios";
import { TOKEN } from "../constants/constants.js";

// Need to check for expiry of token before request for new one.

export const getAuthToken = async () => {
    const client_id = "oCGBoJaCWxDzMF0Ah7NTWOMtFWWiTmLa"
    const client_secret = "4PADc9Yr6gyA0t3Eis_Ou1tQoj6wXLpjrzClcCMkSNP8J3Pd9LeZHFp3Rh5Ks6yA"

    try{
        const { data } = await axios.post(
            'https://oauth.cimpress.io/v2/token',
            {
              grant_type: 'client_credentials',
              client_id,
              client_secret,
              audience: 'https://api.cimpress.io/',
            },
            { headers: { 'content-type': 'application/json' } }
          );
        
          return data.access_token;

    }catch(err){
        console.log(err)
    }
}