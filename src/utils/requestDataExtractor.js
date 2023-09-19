// The http body would contain the followig parameteres like { route, params, query, method, body}
// The body would consist of response from old request and request body.

export const extractDataFromRequest = (data) => {
  const { HttpBody, HttpMethod, HttpQuery, HttpRoute } =
    oldResponse?.AdditionalData;

  const extractedData = {
    route: HttpRoute,
    query: HttpQuery,
    body: HttpBody,
    params,
    method: HttpMethod,
    oldResponse,
  };

  return extractedData;
};
