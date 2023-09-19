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

      if (extractedData.method == "GET") {
        const response = await httpRequest.GetResource();
        await generateDifferenceAndUpdateToS3(
          extractedData.oldResponse,
          response
        );
      }

      if (extractedData.method == "POST") {
        const response = await httpRequest.PostResponse(extractedData.body);
        await generateDifferenceAndUpdateToS3(
          extractedData.oldResponse,
          response
        );
      }
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

      if (log.method == "GET") {
        const response = httpRequest.GetResource(log.query);
        promiseArray.push(response);
      }

      if (log.method == "POST") {
        const response = httpRequest.PostResponse(log.body);
        promiseArray.push(response);
      }
    });

    const data = await Promise.allSettled(promiseArray);

    console.log("Network calls completed.", data);

    data.forEach(async (res, idx) => {
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
