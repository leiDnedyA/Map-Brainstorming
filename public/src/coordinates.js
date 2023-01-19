
/**
 * function checkValidCoords
 * 
 * takes a pair of lat/long coordinates and makes sure that they're within the 
 * bounds of the lng/lat system. The longitude is restricted to [-85, 85]. If the 
 * latitude is outside of the proper boundaries, it will simply be set to the corresponding
 * boundary += the distance from it's current value to the max/min that it's breaking.
 * 
 * return value: [lng, lat]
 * 
 */

function checkValidCoords(lng, lat){

    let validLng = lng;
    let validLat = lat;

    if(lat < -180){
        const dif = -180 - lat;
        validLat = 180 - dif;
    }else if(lat > 180){
        const dif = lat - 180;
        validLat = -180 + dif;
    }

    if(lng < -85){
        validLng = -85;
    }else if(lng > 85){
        validLng = 85;
    }

    return [validLng, validLat];

}

/**
 * function getCoordinateBounds(long, lat, range)
 * 
 * generates a coordinate range of the following format, 
 * of the coordinates += range on either side
 * 
 * returns object:
 * {
 *  ne: [lng, lat],
 *  sw: [lng, lat]
 * }
 * 
 */

function getCoordinateBounds(lng, lat, range = 5) {

    console.log(checkValidCoords(lng, lat))

    const bounds = {
        ne: [lng + range, lat + range],
        sw: [lng - range, lat - range]
    }

    return bounds;

}

/**
 * Like getCoordinateBounds, but adjusted for coords outside of normal lat/lng range
 * 
 */
function getCheckedCoordinateBounds(lng, lat, range = 1) {

    console.log(checkValidCoords(lng, lat))

    const bounds = {
        ne: checkValidCoords(lng + range, lat + range),
        sw: checkValidCoords(lng - range, lat - range)
    }

    return bounds;

}

/**
 * function getBoundingBox(lng, lat, range)
 * 
 * generates a full bounding box from coord+range to coord-range
 * 
 */

function getBoundingBox(lng, lat, range = .1){

}

export { getCoordinateBounds }