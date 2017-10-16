
class Base64 {
    static decode(base64) {
        if (typeof window !== "undefined") {
            return decodeURIComponent(Array.prototype.map.call(window.atob(base64), function (c) {
                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(""));
        } else {
            return Buffer.from(base64, "base64").toString("ascii");
        }
    }

    decode(base64) {
        return this.getClass().decode(base64);
    }

    static encode(text) {
        if (typeof window !== "undefined") {
            return window.btoa(encodeURIComponent(text).replace(/%([0-9A-F]{2})/g, function (match, p1) {
                return String.fromCharCode("0x" + p1);
            }));
        } else {
            return Buffer.from(text).toString("base64");
        }
    }

    encode(text) {
        return this.getClass().encode(text);
    }

    static blob(base64, mimetype = "", sliceSize = 512) {
        const input = base64.replace(/\s/g, ""),
            byteCharacters = atob(input),
            byteArrays = [];
        let offset, slice, byteNumbers, i, byteArray, blob;

        for (offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            slice = byteCharacters.slice(offset, offset + sliceSize);
            byteNumbers = new Array(slice.length);
            for (i = 0; i < slice.length; i += 1) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }

        try {
            blob = new Blob(byteArrays, {
                type: mimetype
            });
        } catch(e) {
            // TypeError old chrome, FF and Android browser
            window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
            if (e.name === "TypeError" && window.BlobBuilder) {
                const bb = new window.BlobBuilder();
                for (offset = 0; offset < byteArrays.length; offset += 1) {
                    bb.append(byteArrays[offset].buffer);
                }
                blob = bb.getBlob(mimetype);
            } else if (e.name === "InvalidStateError") {
                blob = new Blob(byteArrays, {
                    type: mimetype
                });
            } else {
                return null;
            }
        }
        return blob;
    }

    blob(base64, contentType = "", sliceSize = 512) {
        return this.getClass().blob(base64, contentType, sliceSize);
    }

    static decodeBlob(blob) {
        return new Promise((resolve, reject) => {
            const fileReader = new window.FileReader();
            fileReader.onload = readerEvt => {
                let data = readerEvt.target.result;
                const prefix = "base64,";
                if (data.includes(prefix)) {
                    data = data.substr(data.indexOf(prefix) + prefix.length);
                }
                resolve(data);
            };
            fileReader.onerror = error => {
                reject(error);
            };
            fileReader.readAsDataURL(blob);
        });
    }

    decodeBlob(blob) {
        return this.getClass().decodeBlob(blob);
    }
}
export default Base64;
