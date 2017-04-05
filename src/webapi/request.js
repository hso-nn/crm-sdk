import requestJSON from "../requestJSON";

const request = superclass => class extends superclass {
    static request(method, url, body, headers) {
        let baseURL = this.webAPIPath;
        let requestUrl;
        if (url.indexOf("http") === 0) {
            requestUrl = url;
        } else {
            requestUrl = `${baseURL}/${url}`;
        }
        return requestJSON(requestUrl, method, body, headers);
    }

    static requestAndReturnBody(method, url, body, headers) {
        return this.request(method, url, body, headers).then(response => {
            return response.body;
        });
    }

    static requestAndReturnHeader(method, url, body, header) {
        return this.request(method, url, body).then(response => {
            return response.getResponseHeader(header);
        });
    }
};
export default request;
