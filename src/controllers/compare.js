import { comparator } from "../utils/comparator.js";
import { extractDataFromRequest } from "../utils/requestDataExtractor.js";
import { HttpRequest } from "../utils/httpRequestHelper.js";
import { getAuthToken } from "../utils/getAuthToken.js";
import _ from "lodash";

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

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const compareResponseLogsFromS3Processor = async (logs) => {
    try{
        const authToken = await getAuthToken();
        const promiseArrayCore = [];
        const promiseArray = [];
        let counter = 0;

        console.log("Network calls begins")
        logs.forEach(async (log) => {

            if(log && log.route && log.method){
                counter++;
                const httpRequestCore = new HttpRequest('https://productpricecore.ff.cimpress.io',log.route, authToken);
                const httpRequest = new HttpRequest('http://productprice.financialflows.cimpress.io',log.route, authToken);

                if(log.method == 'GET'){
                    const responseCore = httpRequestCore.GetResource(log.query);
                    const response = httpRequest.GetResource(log.query);

                    promiseArrayCore.push(responseCore);
                    promiseArray.push(response)
                }

                if(log.method == 'POST'){
                    const responseCore = httpRequestCore.PostResponse(log.body)
                    const response = httpRequest.PostResponse(log.body)

                    promiseArrayCore.push(responseCore);
                    promiseArray.push(response)
                }

                if (counter > 99) {
                    counter = 0;
                    await delay(120000); // Pause for 60 seconds
                }
            }
        })

        const data = await Promise.allSettled(promiseArray)
        const dataCore = await Promise.allSettled(promiseArrayCore)

        console.log("Network calls completed.")

        data.forEach(async (res, idx) => {

            if(res.status != 'rejected'){
                // if(logs[idx]['oldResponse'].bodyParsed && logs[idx]['oldResponse'].bodyParsed[0])
                await comparator(dataCore[idx].value, res.value) 
            }
        })

        console.log("Comparison process completed")

    }catch(err){
        console.log(err)
    }
}