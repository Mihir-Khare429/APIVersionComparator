import { compareResponseLogsFromS3Processor } from "../services/responseComparisonService.js";
import { getObjectFromS3File } from "../utils/awsUtils.js";
import { logParser } from "../utils/logParser.js";

export const processor = async () => {
  try {
    const data = await getObjectFromS3File();
    const parsedLogs = await logParser(data);
    const logsBatched = parsedLogs.slice(0, 20);
    await compareResponseLogsFromS3Processor(logsBatched);
  } catch (e) {
    return e;
  }
};
