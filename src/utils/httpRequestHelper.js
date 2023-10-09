import axios from "axios";

 export class HttpRequest {

    baseUrl;
    #route;
    #accessToken;

    constructor(baseUrl, route, token){
        this.baseUrl = baseUrl
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

    GetResource(query){
        const requestUrl = `${this.baseUrl}${this.#route}?${query}`;
        try{
            console.log(`Get Request ${requestUrl}`)
            const {data} = axios.get(requestUrl , 
                this.#tokenConfigGenerator()
            );

            return data;

        }catch(err){

            return err
        }
    }

    PostResponse(body){
        const requestUrl = `${this.baseUrl}${this.#route}`;
        //const parsedBody = body.replace(/[\"]/g, '"');
        const config = this.#tokenConfigGenerator();
        try{
            console.log(`Post Request ${requestUrl}`)
            const {data} = axios.post(requestUrl, body,config)

            return data;

        }catch(err){

            return err;
        }
    }
}