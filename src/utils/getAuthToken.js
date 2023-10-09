import axios from "axios";
// Need to check for expiry of token before request for new one.

export const getAuthToken = async () => {

    try{
        const { data } = await axios.post(
            'https://oauth.cimpress.io/v2/token',
            {
              grant_type:"client_credentials",
              client_id,
              client_secret,
              audience: 'https://api.cimpress.io/',
            },
            { headers: { 'content-type': 'application/json' } }
          );

          console.log("Response : ", data.access_token)
        
          return data.access_token;

    }catch(err){
        console.log(err)
    }
}