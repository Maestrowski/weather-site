const errorCallback = (error) => { console.log(error); };
const successCallback = (position) => {
    console.log("location success");
    console.log(position);
}

function getLocation (successCallback) {
    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
        throw new Error('Browser does not support geolocation');
    }
}

async function getLocationAsync() {
    var positionData = await getLocation();
    return positionData;
}

const showLocation = (position) => {
    console.log("location success");
    console.log(position);

    const cityElement = document.getElementById("city");
    const latElement = document.getElementById("lat");
    const lonElement = document.getElementById("lon");

    latElement.innerHTML = position.coords.latitude;
    lonElement.innerHTML = position.coords.longitude;
}

export { getLocation, getLocationAsync, showLocation };