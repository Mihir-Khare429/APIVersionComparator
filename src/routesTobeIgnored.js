export const ignorableRoutes = {
    "/api/v2/datasheets/{datasheetId}" : ["PUT","DELETE"],
    "​/api​/v1​/listPrice​/{priceModelId}​/revisions​/{revisionId}" : ["POST"],
    "/api/v1/listPrice" : ["DELETE"],
    "/api/v1/listPrice/{sellerType}/{sellerId}/{sku}" : ["DELETE"],
    "​/api​/v1​/manufacturingCost​/{priceModelId}​/revisions​/{revisionId}" : ["POST"],
    "/api​/v1​/manufacturingCost" : ["DELETE"],
    "​/api​/v1​/networkCost​/{priceModelId}" : ["DELETE"],
    "​/api​/v1​/networkCost​/{priceModelId}​/revisions​/{revisionId}" : ["POST"],
    "​/api​/v3​/pricemodels​/{priceModelId}​/revisions" : ["POST"],
    "​/api​/v3​/pricemodels​/{priceModelId}" : ["PUT","DELETE"],
    "​/api​/v3​/pricemodels" : ["POST"],

}