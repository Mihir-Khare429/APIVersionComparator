export const logParser = async (data) => {
    try{
        const parsedLogs = []

        if(data.length > 0){
            const formattedLogs = logMapper(data)

            for(let key in formattedLogs){
                const value = formattedLogs[key]
                const direction = value[0]?.direction
                const requestBody = direction == "Incoming" ? value[0] : value[1]
                const responseBody = direction == "Outgoing" ? value[0] : value[1]

                const {HttpRoute, HttpMethod, HttpQuery} = value[0]

                delete responseBody['HttpQuery']
                delete responseBody['HttpMethod']
                delete responseBody['HttpRoute']
                delete responseBody['direction']

                parsedLogs.push(
                    {
                        route : HttpRoute,
                        query : HttpQuery,
                        body : requestBody,
                        method : HttpMethod,
                        oldResponse : responseBody
                    }
                )
            }
        }

        return parsedLogs
        
    }catch(err){
        console.log(err)
    }
}

const logMapper = (data) => {
    const dictionary = {}
    const directionDictionary = {}
    data.forEach(log => {
        let body;

        try{
            body = JSON.parse(log.contents["_raw"]).AdditionalData
        }catch(err){
            return;
        }

        const direction = body.HttpDirection
        const key =  body.HttpHeaders['orion-correlation-id-parent']
        let directionToAdd = "Outgoing"
        
        if(key != undefined){

            if(directionDictionary.hasOwnProperty(key)){
                const directionAlreadyPresent = directionDictionary[key]
                directionToAdd = directionAlreadyPresent == directionToAdd ? "Incoming" : directionToAdd
            }else{
                directionDictionary[key] = direction
            }
    
            const bodyParsed = body.HttpBody
            const HttpMethod = body.HttpMethod
            const HttpRoute = body.HttpRoute
            const HttpQuery = body.HttpQuery

            if(dictionary.hasOwnProperty(key) && directionToAdd != directionDictionary[key]){
                const value = dictionary[key]
                value.push(bodyParsed)
            }else{
                dictionary[key] = [
                    { direction, HttpMethod, HttpRoute, HttpQuery, ...bodyParsed}
                ]
            }
        }
        
    });

    for(let key in dictionary){
        const value = dictionary[key]
        if(value.length != 2){
            delete dictionary[key]
        }
    }

    return dictionary
}