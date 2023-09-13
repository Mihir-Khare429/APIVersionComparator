import axios from "axios";

 export class HttpRequest {

    baseUrl = 'https://productpricecore.ff.cimpress.io';
    #route;
    #accessToken;

    constructor(route, token){
        this.#route = route
        this.#accessToken = token
    }
    
    #tokenConfigGenerator(){
        return {
            headers: { 
                'Authorization': `Bearer ${this.#accessToken}`,
                'Content-Type': 'application/json',
            }
        };
    }

    async GetResource(query){
        const requestUrl = `${this.baseUrl}${this.#route}?${query}`;
        try{
            console.log(`Get Request ${requestUrl}`)
            const {data} = await axios.get(requestUrl , 
                this.#tokenConfigGenerator()
            );

            return data;

        }catch(err){

            return err
        }
    }

    async PostResponse(body){
        const requestUrl = `${this.baseUrl}${this.#route}`;
        //const parsedBody = body.replace(/[\"]/g, '"');
        const config = this.#tokenConfigGenerator();
        try{
            console.log(`Post Request ${requestUrl}`)
            const {data} = await axios.post(requestUrl, body,config)

            return data;

        }catch(err){

            return err;
        }
    }
}