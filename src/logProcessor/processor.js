import { compareResponseLogsFromS3Processor } from "../controllers/compare.js";
import { removeUnwantedRoutes } from "../helper.js";
import { GetObjectFromS3File } from "../utils/awsUtils.js"
import { notEqual, total } from "../utils/comparator.js";
import { logParser, logParser2 } from "../utils/logParser.js"

export const processor = async () => {
    try{
      const data = await GetObjectFromS3File();
      const parsedLogs = await logParser2(data);
      const batch = parsedLogs.slice(0,3000)
      await compareResponseLogsFromS3Processor(batch)
      console.warn("Total Requests",total,"Failed requests", notEqual)
    }catch(e){

        return e
    }
}