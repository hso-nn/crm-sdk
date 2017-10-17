const allowedRequestMethods = ["DELETE", "GET", "PATCH", "POST", "PUT"];

const requestJSON = (url, method = "GET", data, headers = {}) => {
    if (allowedRequestMethods.indexOf(method) === -1) {
        throw new Error(`Request method must be one of the following: ${allowedRequestMethods.join(", ")}`);
    }
    let requestData = null;
    if (data) {
        requestData = JSON.stringify(data); // when data is undefined IE sends undefined as a string
    }
    const totalHeaders = Object.assign({
        "OData-MaxVersion": "4.0",
        "OData-Version": "4.0",
        "Accept": "application/json",
        "Content-Type": "application/json; charset=utf-8"
    }, headers);

    if (typeof XMLHttpRequest !== "undefined") {
        return requestXMLHttpRequest(url, method, requestData, totalHeaders);
    } else {
        return requestNodeHttpRequest(url, method, requestData, totalHeaders);
    }
};

const requestXMLHttpRequest = (url, method, data, headers) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open(method, encodeURI(url), true);
        for (const header in headers) {
            request.setRequestHeader(header, headers[header]);
        }
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                request.onreadystatechange = null;
                try {
                    const response = handleXMLHttpsRequest(request);
                    resolve(response);
                } catch(e) {
                    reject(e);
                }
            }
        };
        request.send(data);
    });
};

const handleXMLHttpsRequest = request => {
    const dataHandler = () => {
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
    };
    const statusHandlers = {
        200: () => {
            return dataHandler();
        },
        201: () => {
            return dataHandler();
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

const requestNodeHttpRequest = (url, method, data, headers) => {
    return new Promise((resolve, reject) => {
        const https = eval("require")("https"), // hack for now: https://stackoverflow.com/questions/34828722/how-can-i-make-webpack-skip-an-require
            split = url.split("/"),
            hostname = split[2],
            path = "/" + split.slice(3, split.length).join("/");

        if (method !== "GET") {
            headers["Content-Length"] = data.length;
        }
        const req = https.request({
            hostname: hostname,
            port: 443,
            path: encodeURI(path),
            method: method,
            headers: headers
        }, response => {
            let body = "";
            response.setEncoding("utf8");
            response.on("data", chunk => body += chunk);
            response.on("end", () => {
                try {
                    resolve(handleNodeHttpsResponse(response, body));
                } catch(e) {
                    reject(e);
                }
            });
        });
        req.on("error", error => {
            reject(error);
        });
        if (method !== "GET") {
            req.write(data);
        }
        req.end();
    });
};

const handleNodeHttpsResponse = (response, bodyString) => {
    const dataHandler = () => {
        let body = null;
        try {
            body = JSON.parse(bodyString, dateReviver);
        } catch (ex) {
            throw new Error("JSON response can't be parsed");
        }
        return {
            body: body,
            getResponseHeader: function (headerName) {
                return response.headers[headerName];
            },
            statusCode: response.statusCode
        };
    };
    const statusHandlers = {
        200: () => {
            return dataHandler();
        },
        201: () => {
            return dataHandler();
        },
        204: () => {
            return {
                body: null,
                getResponseHeader: function (headerName) {
                    return response.headers[headerName];
                },
                statusCode: response.statusCode
            };
        }
    };

    const statusHandler = statusHandlers[response.statusCode];
    if (statusHandler) {
        return statusHandler();
    } else {
        if (response.statusCode === 401) {
            throw new Error("Unauthorized");
        }
        throw new Error(`${response.statusCode}: ${response.statusMessage}\n ${bodyString}`);
    }
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


export default requestJSON;
