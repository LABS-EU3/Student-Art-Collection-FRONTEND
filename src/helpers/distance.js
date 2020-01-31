export default function calculateDistance(buyer, school) {
    //poo abbreviation for shit
    var poolat = school.lat;
    var poolng = school.lng;
    var destlat = buyer.lat;
    var destlng = buyer.lng;

    return Math.sqrt(Math.pow((destlat - poolat),2) + Math.pow((destlng - poolng),2))
}

