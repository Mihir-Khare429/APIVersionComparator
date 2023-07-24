import { deleteEventsFromSQS, getEventsFromSQS } from './src/utils/awsUtils.js';
import { processor } from './src/logProcessor/processor.js';

(async() => {
    try{
        while(true){
            const messages = await getEventsFromSQS()
    
            if ( messages && messages.length > 0) {
                try{
                    await deleteEventsFromSQS(messages[0].ReceiptHandle)
                    processor()
                }catch(err){
                    console.log(err)
                }
    
            }
        }
    }catch(err){
        console.log("Error ", err)
    }
})();