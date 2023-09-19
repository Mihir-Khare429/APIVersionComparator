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
    const promiseArray = [];

    console.log("Network calls begins", logs);
    logs.forEach(async (log) => {
      const httpRequest = new HttpRequest(log.route, authToken);

      let productPriceCoreResponsePromise;
      switch (log.method) {
        case "GET":
          productPriceCoreResponsePromise = httpRequest.GetResource(log.query);
          break;
        case "POST":
          productPriceCoreResponsePromise = httpRequest.PostResponse(log.body);
          break;
        default:
          productPriceCoreResponsePromise = null;
      }

      promiseArray.push(productPriceCoreResponsePromise);
    });

    const productPriceCoreResponses = await Promise.allSettled(promiseArray);

    console.log("Network calls completed.", productPriceCoreResponses);

    productPriceCoreResponses.forEach(async (res, idx) => {
      if (res.status != "rejected") {
        await generateDifferenceAndUpdateToS3(
          logs[idx]["oldResponse"].bodyParsed[0],
          res.value.value[0]
        );
      }
    });
  } catch (err) {
    console.log(err);
  }
};
