import { compareResponseLogsFromS3Processor } from "../controllers/compare.js";
import { GetObjectFromS3File } from "../utils/awsUtils.js"
import { logParser } from "../utils/logParser.js"

export const processor = async () => {
    try{
      const data = await GetObjectFromS3File();
      const parsedLogs = await logParser();
      const comparatorCall =  await compareResponseLogsFromS3Processor(parsedLogs)
    }catch(e){

        return e
    }
}