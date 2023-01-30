import {getRequest} from "./httpRequests.js";

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
    queryString.replace(' ', '%20');
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${queryString}`;

    return getRequest(url);
}

/**
 * 
 * function requestArtwork(id : string)
 * string -> JSON
 * 
 */

function queryArtwork(objectID){
    return getRequest(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`);
}

export {queryMetAPI, queryArtwork}