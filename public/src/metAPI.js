
/**
 * DOCUMENTATION:
 * https://metmuseum.github.io/
 * 
 * EXAMPLE REQUEST: 
 * https://collectionapi.metmuseum.org/public/collection/v1/search?q=canada
 * 
 */

/**
 * async function queryMetAPI(queryString)
 * string -> Promise -> JSON
 * 
 * queries the MET api based on a query and returns the response JSON.
 * JSON format: 
 * { "total": <int representing number of search results>,
 * "objectIDs": <array of int object IDs>
 * }
 */
async function queryMetAPI(queryString){
    return new Promise((res, rej)=>{
        const req = new XMLHttpRequest();
        req.addEventListener('load', ()=>{
            res(JSON.parse(req.response));
        });
        queryString.replace(' ', '%20')
        req.open("GET", `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${queryString}`);
        req.send();
    })
}

/**
 * 
 * function requestArtwork(id : string)
 * string -> JSON
 * 
 */

function queryArtwork(objectID){

}

export {queryMetAPI, queryArtwork}