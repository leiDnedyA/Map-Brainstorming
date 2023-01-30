/**
 * 
 * DOCUMENTATION:
 * https://opencagedata.com/api
 * 
 * EXAMPLE REQUEST:
 * https://api.opencagedata.com/geocode/v1/json?key=0cfdcbe89d2242ee9c8e061e637360dd&q=52.3877830%2C+9.7334394&pretty=1&no_annotations=1
 * 
 */

import {getRequest} from './httpRequests.js';

/**
 * async function getPlaceFromCoords(lat, lng)
 * 
 * returns {continent: "North America", country: "United States", city: "Boston"}
 * 
 */
async function getPlaceFromCoords(lat, lng) {
    const url = `https://api.opencagedata.com/geocode/v1/json?key=0cfdcbe89d2242ee9c8e061e637360dd&q=${lat}+${lng}&pretty=1&no_annotations=1`;
    return new Promise((res, rej)=>{
        getRequest(url).then((response)=>{
            const resJSON = JSON.parse(response);
            // console.log(resJSON);
            res(resJSON);
        })
    })
}

export {getPlaceFromCoords};