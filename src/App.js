import React from 'react';
import Weather from './Weather';
import { getLocation, FullTodayForecast } from './Location.js';


const App = () => {
    getLocation();

    return (
        <div>
            <h1>Get City Weather</h1>
            <FullTodayForecast />
        </div>
    );
};
export default App;