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
        for (let header in headers) {
            XMLHttpRequest.setRequestHeader(header, headers[header]);
        }
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                request.onreadystatechange = null;
                handleRequest(request).then(resolve).catch(reject);
            }
        };
        request.send(JSON.stringify(data));
    });
};

const dateReviver = (key, value) => {
    if (typeof value === "string") {
        let d = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?::(\d*))?Z$/.exec(value);
        if (d) {
            return new Date(Date.UTC(+d[1], +d[2] - 1, +d[3], +d[4], +d[5], +d[6], +d[7]));
        }
    }
    return value;
};

const handleRequest = (request) => {
    return new Promise((resolve, reject) => {
        let statusHandlers  = [{
            status: [200],
            handler: () => {
                let body = null,
                    data = request.response;
                try {
                    body = JSON.parse(data, dateReviver);
                } catch (ex) {
                    reject(new Error("JSON response can't be parsed"));
                    return;
                }

                resolve({
                    body: body,
                    getResponseHeader: request.getResponseHeader.bind(request),
                    statusCode: request.status
                });
            }
        }, {
            status: [204],
            handler: () => {
                let body = null;
                resolve({
                    body: body,
                    getResponseHeader: request.getResponseHeader.bind(request),
                    statusCode: request.status
                });
            }
        }];

        const defaultHandler = () => {
            let error;
            try {
                error = JSON.parse(request.response).error;
            } catch (e) {
                error = new Error("Unexpected Error");
            }
            reject(error);

        };

        let statusHandler = statusHandlers.find(item => {
            if (item.status.indexOf(request.status) > -1) {
                return true;
            }
        });

        if (statusHandler) {
            statusHandler.handler();
        } else {
            defaultHandler();
        }
    });
};
export default requestJSON;
