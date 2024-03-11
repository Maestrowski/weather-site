import React from 'react';
import Weather from './Weather';
import { getLocation } from './Location.js';


const App = () => {
    getLocation();

    return (
        <div>
            <h1>Get City Weather</h1>
            <Weather />
        </div>
    );
};
export default App;