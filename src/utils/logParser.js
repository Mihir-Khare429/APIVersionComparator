import _ from "lodash";

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
            console.log("Log parsed into required format successfully")
            
            return parsedLogs
        }

        console.log("Log parsing failed")
        
    }catch(err){
        console.log(err)
    }
}

const logMapper = (data) => {
    const dictionary = {}
    let mt;
    const directionDictionary = {}
    const filteredLogs = logFilter(data)
    filteredLogs.forEach(log => {
        let body;

        try{
            body = JSON.parse(log.contents["_raw"]).AdditionalData

            if(!body.HttpDirection){
                mt = JSON.parse(log.contents["_raw"])["@mt"]
            }
        }catch(err){
            return;
        }

        if(body){
            const direction = body?.HttpDirection !== undefined ? body.HttpDirection : getRequestDirection(mt)
            //const key =  body.HttpHeaders['orion-correlation-id-root']
            const key = JSON.parse(log.contents["_raw"]).OrionCorrelationData["RootId"];
            let directionToAdd;
            
            if(key != undefined && direction != undefined){

                if(directionDictionary.hasOwnProperty(key)){
                    const directionAlreadyPresent = directionDictionary[key]
                    directionToAdd = directionAlreadyPresent == "Outgoing" ? "Incoming" : "Outgoing"
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
                        { direction, HttpMethod, HttpRoute, HttpQuery, bodyParsed}
                    ]
                }
            }
        }
        
    });
    for(let key in dictionary){
        const value = dictionary[key]

        if(value.length != 2){
            delete dictionary[key]
        }
    }
    console.log("Request and response mapped successfully.")

    return dictionary
}

const getRequestDirection = (message) => {
    if(message != undefined){
        const direction = message.slice(0,2)

        return direction === "=>" ? "Incoming" : "Outgoing";
    }
}

const logFilter = (data) => {

    if(_.isUndefined(JSON.parse(data[0].contents["_raw"])["@mt"])){

        return data;
    }

    const filteredLogs = data.filter( log => {
        try{
            const mt = JSON.parse(log.contents["_raw"])["@mt"]
            const messageType = mt.slice(0,1) 
            if(messageType == "=" || messageType == "<"){
    
                return log;
            }
        }catch(e){
            return;
        }
    })

    return filteredLogs;
}

export const logParser2 = async (logs) => {
    try{
        const parsedLogs = logs.map((log) => {
            let body;

            try{
                body = JSON.parse(log.contents["_raw"]).AdditionalData
            }catch(err){

                return ;
            }
            if(typeof(body.HttpBody) == "string"){
                return ;
            }

            return {
                body : body.HttpBody,
                query : body.HttpQuery,
                method : body.HttpMethod,
                route : body.HttpRoute
            }
        })

        return parsedLogs;

    }catch(err){
        console.log(err)
    }
}