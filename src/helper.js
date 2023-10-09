import { ignorableRoutes } from "./routesTobeIgnored.js"

export const removeUnwantedRoutes = (batch) => {
    const allowedBatch = [];
    let i =1;
    batch.forEach((request) => {
        i++;
        console.log(i);
        const route = request.route;
        const method = request.method;

        if (route in ignorableRoutes) {
            const methodNotAllowed = ignorableRoutes[route];
            if (!methodNotAllowed.includes(method)) {
                allowedBatch.push(request);
            }
        } else {
            allowedBatch.push(request);
        }
    });

    return allowedBatch;
};





