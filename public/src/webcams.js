const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'BATjTQY7lglu8hTzO25CCfT2LDzsG5gE',
        'X-RapidAPI-Host': 'webcamstravel.p.rapidapi.com'
    }
};

/**
 * function getCoordinateBounds(long, lat, range)
 * 
 * returns object:
 * {
 *  ne_lat: 0,
    ne_lng: 0,
    sw_lat: 0,
    sw_long: 0
 * }
 * 
 */

function getCoordinateBounds(lon, lat, range = 5){

    const bounds = {
        ne_lat: 0,
        ne_lng: 0,
        sw_lat: 0,
        sw_long: 0
    }

    //for loop that checks if coords are valid and adjusts them if need be

}

/**
 * function fetchWebcams(long, lat, range, zoom)
 * logs api response to console
 */

function fetchWebcams(lon, lat, range, zoom){

    const bounds = getCoordinateBounds(lon, lat, range);

    fetch(`https://api.windy.com/api/webcams/v2/map/{ne_lat},{ne_lng},{sw_lat},{sw_lng},{zoom}`, options)
        .then(response => response.json())
        .then(response => console.log(response));
}