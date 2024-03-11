const successCallback = (position) => {
    console.log(position);
};
  
const errorCallback = (error) => {
    console.log(error);
};

function getLocation () {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}


export { getLocation };