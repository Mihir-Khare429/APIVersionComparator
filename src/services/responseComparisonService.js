import { generateDifferenceAndUpdateToS3 } from "../utils/responseComparisonUtility.js";
import { extractDataFromRequest } from "../utils/requestDataExtractor.js";
import { HttpRequest } from "../utils/httpRequestHelper.js";
import { getAuthToken } from "../utils/getAuthToken.js";

export const compareResponse = async (req, res) => {
  try {
    const body = req.body;
    const authToken = getAuthToken();

    if (body) {
      const extractedData = extractDataFromRequest(body);
      const httpRequest = new HttpRequest(extractedData.route, authToken);

      let productPriceCoreResponse;
      switch (extractedData.method) {
        case "GET":
          productPriceCoreResponse = await httpRequest.GetResource();
          break;
        case "POST":
          productPriceCoreResponse = await httpRequest.PostResponse(
            extractedData.body
          );
          break;
        default:
          productPriceCoreResponse = null;
      }

      await generateDifferenceAndUpdateToS3(
        extractedData.oldResponse,
        productPriceCoreResponse
      );
    }

    return res.status(400).send({
      message: "Empty request",
    });
  } catch (err) {
    return res.status(500).send({
      message: "Internal service error",
    });
  }
};

export const compareResponseLogsFromS3Processor = async (logs) => {
  try {
    const authToken = await getAuthToken();
    const promiseArrayOld = [];
    const promiseArrayNew = [];
    const responseOld = [];
    const responeNew = [];

    console.log("Network calls begins");

    for(const log of logs){
      const httpRequestOld = new HttpRequest('https://priceintegration.financialflows.cimpress.io',log.route, authToken);
      const httpRequestNew = new HttpRequest('https://pricingintegration.financialflows.cimpress.io/v1/priceList',log.route, authToken);

      let priceIntegrationOldResponse;
      let priceIntegrationNewResponse;
      switch (log.method) {
        case "GET":
          priceIntegrationOldResponse = await httpRequestOld.GetResource(log.query);
          priceIntegrationNewResponse = await httpRequestNew.GetResource(log.query);
          break;
        case "POST":
          priceIntegrationOldResponse = await httpRequestOld.PostResponse(log.body);
          priceIntegrationNewResponse = await httpRequestNew.PostResponse(log.body);
          break;
        default:
          priceIntegrationOldResponse = null;
          priceIntegrationNewResponse = null;
      }

      promiseArrayOld.push(priceIntegrationOldResponse);
      promiseArrayNew.push(priceIntegrationNewResponse)

      if(promiseArrayOld.length >= 10){
        const priceIntgerationOld = await Promise.allSettled(promiseArrayOld);
        const priceIntgerationNew = await Promise.allSettled(promiseArrayNew)

        responseOld.push(priceIntgerationOld)
        responeNew.push(priceIntgerationNew)

        promiseArrayOld.length = 0
        promiseArrayNew.length = 0
      }
    };

    console.log("Network calls completed.");

    responseOld.forEach(async (res, idx) => {
      if (res.status != "rejected") {
        await generateDifferenceAndUpdateToS3(
          responeNew.value,
          res.value
        );
      }
    });
  } catch (err) {
    console.log(err);
  }
};