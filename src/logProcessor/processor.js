import { compareResponseLogsFromS3Processor } from "../controllers/compare.js";
import { GetObjectFromS3File } from "../utils/awsUtils.js"
import { logParser } from "../utils/logParser.js"

export const processor = async () => {
    try{
      const data = await GetObjectFromS3File();
      const parsedLogs = await logParser(data);
      const logsBatched = parsedLogs.slice(0,20)
      const comparatorCall =  await compareResponseLogsFromS3Processor(logsBatched)
    }catch(e){

        return e
    }
}