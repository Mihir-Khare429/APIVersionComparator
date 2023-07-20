import _ from "lodash";
import { UploadObjectToS3 } from "./awsUtils.js";

export const comparator = async(response, coreResponse) => {
    try{
        console.log("Response : ", response, coreResponse, deepEqual(response, coreResponse))

        if(!deepEqual(response, coreResponse)){
            const differencesBetweenObjects = generateDifferenceBetweenResponseObjects(response, coreResponse)
            const status = await UploadObjectToS3(differencesBetweenObjects)

            return status
        }

    }catch(err){

        return err
    }
}

function deepEqual(obj1, obj2){

    if(_.isArray(obj2)){
        obj2 = obj2[0]
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    return _.isEqual(obj1, obj2)
}

function generateDifferenceBetweenResponseObjects(obj1, obj2){
    const differences = []

    if(_.isArray(obj2)){
        obj2 = obj2[0]
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    for( let key in keys1 ){

        if(!_.isEqual(obj1[key], obj2[key])){
            differences.push({
                "key" : key,
                "productPrice" : obj1[key],
                "productPriceCore" : obj2[key]
            })
        }
    }

    return {
        ProductPriceResponse : obj1,
        ProductPriceCoreResponse : obj2,
        differences
    }
}