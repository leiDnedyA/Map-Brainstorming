/**
 * async function getRequest (url)
 * 
 * returns a promise containing response from request
 * 
 */

async function getRequest(url) {
    return new Promise((res, rej) => {
        const request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.setRequestHeader("Accept-Language", "en-EN");
        request.onload = () => {
            if (request.status >= 200 && request.status < 300) {
                res(request.response);
            } else {
                rej(request.statusText);
            }
        }
        request.onerror = () => rej(request.statusText);
        request.send();
    })
}

export {getRequest}