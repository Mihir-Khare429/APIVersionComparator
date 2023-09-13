import { S3Client, PutObjectCommand, ListObjectsV2Command, GetObjectCommand} from "@aws-sdk/client-s3";
import { DeleteMessageCommand, ReceiveMessageCommand, SQSClient } from "@aws-sdk/client-sqs";
import { REGION, BUCKET_NAME, BUCKET_NAME_LOGS, QUEUEURL } from "../constants/constants.js";
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { DataSheetConverter } from "@cimpress-technology/pricing-utility";

const client = new S3Client({
    region : REGION
})

const sqsClient = new SQSClient({
    region : REGION
})

export const getEventsFromSQS = async() => {
    const command = new ReceiveMessageCommand({
        QueueUrl : QUEUEURL
    })

    const { Messages } = await sqsClient.send(command)

    if(Messages){
        console.log('Messages Recieved', Messages)
    }

    return Messages
}

export const deleteEventsFromSQS = async(receiptHandle) => {
    const command = new DeleteMessageCommand({
        QueueUrl : QUEUEURL,
        ReceiptHandle : receiptHandle
    })

    await sqsClient.send(command)
}

export const UploadObjectToS3 = async (data) => {
    try{
        const command = new PutObjectCommand({
            Bucket : BUCKET_NAME,
            Key: `PriceListAPI : ${new Date().toISOString()}`,
            Body: JSON.stringify(data),
            ContentType: 'application/json; charset=utf-8'
        })
        const response = await client.send(command);

        return response;
    }catch(err){
        console.log(err)

        return err;
    }
}

export const createPreSignedUrl = async (key) => {
    try{
        const command = new GetObjectCommand({
            Bucket : BUCKET_NAME_LOGS,
            Key : key
        })
        const url = await getSignedUrl(client, command, { expiresIn: 60 * 60 }); // expires in seconds
        
        return url;
    }catch(err){
        console.log(err)
    }
}

export const ReadObjectsFromS3 = async () => {
    try{
        const input = new ListObjectsV2Command({
            Bucket : BUCKET_NAME_LOGS
        })
        const bucketData = await client.send(input)

        if(bucketData.Contents){
            const key = getLatestModifiedKey(bucketData.Contents)
            
            return key;
        }
        
    }catch(err){
        console.log(err)
    }
}

export const GetObjectFromS3File = async () => {
    try{
        const bucketKey = await ReadObjectsFromS3();
        console.log(`S3 file key ${bucketKey}`);
        const preSignedUrl = await createPreSignedUrl(bucketKey)
        console.log(preSignedUrl)
        const bucketData = await DataSheetConverter(preSignedUrl)

        if(bucketData){
            console.log("Bucket data fetched.")
            
            return bucketData.rows
        }else{
            console.log("Unable to fetch bucket data.")
        }

    }catch(err){
        console.log(err)
    }
}

const getLatestModifiedKey = (keys) => {
    let max_Modified = keys[0].LastModified
    let data = keys[0];
    keys.forEach((key) => {
        if(key.LastModified > max_Modified){
            max_Modified = key.LastModified
            data = key
        }
    })

    return data.Key
}