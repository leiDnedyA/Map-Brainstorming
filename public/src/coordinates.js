
const deg2rad = (deg) => (Math.PI * deg / 180);
const rad2deg = (rad) => (180 * rad / Math.PI);


// Semi-axes of WGS - 84 geoidal reference
const WGS84_a = 6378137.0  // Major semiaxis[m]
const WGS84_b = 6356752.3  // Minor semiaxis[m]

// Earth radius at given lattitude according to WGS-84 ellipsoid [m]
function WGS84EarthRadius(lat){
    // http://en.wikipedia.org/wiki/Earth_radius
    const An = WGS84_a * WGS84_a * Math.cos(lat)
    const Bn = WGS84_b * WGS84_b * Math.sin(lat)
    const Ad = WGS84_a * Math.cos(lat)
    const Bd = WGS84_b * Math.sin(lat)
    return Math.sqrt((An * An + Bn * Bn) / (Ad * Ad + Bd * Bd))
}

// generates NE and SW bounds within "rangeInKM" KM of the given coordinates
// returns: {ne: [lng, lat], sw: [lng, lat]}
function getCoordinateBounds(lngInDeg, latInDeg, rangeInKM = 5) {
    const lng = deg2rad(lngInDeg);
    const lat = deg2rad(latInDeg);
    const range = 1000 * rangeInKM;

    const radius = WGS84EarthRadius(lat);
    const pRadius = radius * Math.cos(lat);

    const bounds = {
        ne: [rad2deg(lng + range / pRadius), rad2deg(lat + range/radius)],
        sw: [rad2deg(lng - range/pRadius), rad2deg(lat - range/radius)]
    }

    return bounds;

}


export { getCoordinateBounds }