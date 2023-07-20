import { comparator } from "../utils/comparator.js";
import { extractDataFromRequest } from "../utils/requestDataExtractor.js";
import { HttpRequest } from "../utils/httpRequestHelper.js";
import { getAuthToken } from "../utils/getAuthToken.js";

export const CompareResponse = async (req, res) => {
    try{
        const body = req.body
        const authToken = getAuthToken();
        
        if(body){
            const extractedData = extractDataFromRequest(body)
            const httpRequest = new HttpRequest(extractedData.route, authToken);
            
            if(extractedData.method == 'GET'){
                const response = await httpRequest.GetResource();
                await comparator(extractedData.oldResponse, response)
            }

            if(extractedData.method == 'POST'){
                const response = await httpRequest.PostResponse(extractedData.body)
                await comparator(extractedData.oldResponse, response)
            }
        }
        
        return res.status(400).send({
            message : "Empty request"
        })

    }catch(err){
        return res.status(500).send({
            message : "Internal service error"
        })
    }
}

export const compareResponseLogsFromS3Processor = async (logs) => {
    try{
        const authToken = await getAuthToken();
        const promiseArray = [];

        logs.forEach(async (log) => {
            const httpRequest = new HttpRequest(log.route, authToken);

            if(log.method == 'GET'){
                const response = httpRequest.GetResource();
                promiseArray.push(response)
                //await comparator(log.oldResponse, response)
            }

            if(log.method == 'POST'){
                const response = httpRequest.PostResponse(log.body)
                promiseArray.push(response)
                //await comparator(log.oldResponse, response)
            }
        })

        const data = await Promise.allSettled(promiseArray)

        data.forEach(async (res, idx) => {

            if(res.status != 'rejected'){
               await comparator(logs[idx]['oldResponse'], res.value) 
            }
        })

    }catch(err){
        console.log(err)
    }
}