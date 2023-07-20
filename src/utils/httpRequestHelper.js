import axios from "axios";

 export class HttpRequest {

    baseUrl = 'https://productprice.financialflows.cimpress.io';
    #route;
    #accessToken;

    constructor(route, token){
        this.#route = route
        this.#accessToken = token
    }
    
    #tokenConfigGenerator(){
        return {
            headers: { Authorization: `Bearer ${this.#accessToken}` }
        };
    }

    async GetResource(){
        const requestUrl = `${this.baseUrl}${this.#route}`;
        try{
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
        const config = this.#tokenConfigGenerator();
        try{
            const {data} = await axios.post(requestUrl, body,config)

            return data;

        }catch(err){

            return err;
        }
    }
}