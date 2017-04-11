import requestJSON from "../requestJSON";

const request = superclass => class extends superclass {
    static request(method, url, data, headers) {
        const baseURL = this.webAPIPath;
        let requestUrl;
        if (url.indexOf("http") === 0) {
            requestUrl = url;
        } else {
            requestUrl = `${baseURL}/${url}`;
        }
        return requestJSON(requestUrl, method, data, headers);
    }

    static requestAndReturnBody(method, url, data, headers) {
        return this.request(method, url, data, headers).then(response => {
            return response.body;
        });
    }

    static requestAndReturnHeader(method, url, data, header) {
        return this.request(method, url, data).then(response => {
            return response.getResponseHeader(header);
        });
    }
};
export default request;
