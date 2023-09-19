import { deleteEventsFromSQS, getEventsFromSQS } from "./src/utils/awsUtils.js";
import { processor } from "./src/processors/processor.js";

(async () => {
  try {
    console.log("Processor Started", Date.now());
    while (true) {
      const messages = await getEventsFromSQS();

      if (messages && messages.length > 0) {
        try {
          await deleteEventsFromSQS(messages[0].ReceiptHandle);
          processor();
        } catch (err) {
          console.log(err);
        }
      }
    }
  } catch (err) {
    console.log("Error ", err);
  }
})();
