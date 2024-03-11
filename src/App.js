import React from 'react';
import { Weather, TodayForecast } from './Weather';
import { getLocation, getLocationAsync, showLocation } from './Location';


const App = () => {
    getLocation(showLocation);

    return (
        <div>
            <h1>Get City Weather</h1>
            <Weather />

            <h1>Weather by Location</h1>
            <p id="city"></p>
            <p id="lat"></p>
            <p id="lon"></p>

            <TodayForecast />
        </div>
    );
};
export default App;