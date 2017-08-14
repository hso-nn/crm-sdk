const allowedRequestMethods = ["DELETE", "GET", "PATCH", "POST", "PUT"];

const requestJSON = (url, method = "GET", data, headers = {}) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        if (allowedRequestMethods.indexOf(method) === -1) {
            throw new Error(`Request method must be one of the following: ${allowedRequestMethods.join(", ")}`);
        }
        request.open(method, encodeURI(url), true);
        request.setRequestHeader("OData-MaxVersion", "4.0");
        request.setRequestHeader("OData-Version", "4.0");
        request.setRequestHeader("Accept", "application/json");
        request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        for (const header in headers) {
            request.setRequestHeader(header, headers[header]);
        }
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                request.onreadystatechange = null;
                try {
                    const response = handleRequest(request);
                    resolve(response);
                } catch(e) {
                    reject(e);
                }
            }
        };
        let requestData = null;
        if (data) {
            requestData = JSON.stringify(data);
        }
        request.send(requestData); // when data is undefined IE sends undefined as a string
    });
};

const dateReviver = (key, value) => {
    if (typeof value === "string") {
        const d = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?::(\d*))?Z$/.exec(value);
        if (d) {
            return new Date(Date.UTC(+d[1], +d[2] - 1, +d[3], +d[4], +d[5], +d[6], +d[7] || 0));
        }
    }
    return value;
};

const handleRequest = request => {
    const statusHandlers  = {
        200: () => {
            let body = null;
            try {
                body = JSON.parse(request.response, dateReviver);
            } catch (ex) {
                throw new Error("JSON response can't be parsed");
            }

            return {
                body: body,
                getResponseHeader: request.getResponseHeader.bind(request),
                statusCode: request.status
            };
        },
        204: () => {
            return {
                body: null,
                getResponseHeader: request.getResponseHeader.bind(request),
                statusCode: request.status
            };
        }
    };

    const statusHandler = statusHandlers[request.status];
    if (statusHandler) {
        return statusHandler();
    } else {
        throw new Error("Unexpected Error");
    }
};
export default requestJSON;
