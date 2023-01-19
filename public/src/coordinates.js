
/**
 * function getCoordinateBounds(long, lat, range)
 * 
 * generates a coordinate range of the following format, 
 * of the coordinates += range on either side
 * 
 * returns object:
 * {
 *  ne_lat: 0,
    ne_lng: 0,
    sw_lat: 0,
    sw_lng: 0
 * }
 * 
 */

function getCoordinateBounds(lng, lat, range = 5) {

    const bounds = {
        ne_lat: lat + range,
        ne_lng: lng + range,
        sw_lat: lat - range,
        sw_lng: lng - range
    }

    //for loop that checks if coords are valid and adjusts them if need be

}

export default { getCoordinateBounds }