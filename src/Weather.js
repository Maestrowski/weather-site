import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getLocationAsync } from './Location';

const TodayForecast = () => {
    const cityElement = document.getElementById("city");
    const latElement = document.getElementById("lat");
    const lonElement = document.getElementById("lon");

    const [weatherData, setWeatherData] = useState(null);
    const API_KEY = "0d3bf85c5d6165db220b90244015d73b"
    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latElement.innerHTML}&lon=${lonElement.innerHTML}&units=metric&appid=${API_KEY}`
            );

            setWeatherData(response.data);

            console.log(response.data); //You can see all the weather data in console log

        } catch (error) { console.error(error); }
    };

    useEffect(() => { fetchData(); }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetchData();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button type="submit">Get Weather</button>
            </form>
            {weatherData ? (
            <>
                <h2>{weatherData.name}</h2>
                <p>Temperature: {weatherData.main.temp}°C</p>

                <p>Description: {weatherData.weather[0].description}</p>
                <p>Feels like : {weatherData.main.feels_like}°C</p>
                <p>Humidity : {weatherData.main.humidity}%</p>
                <p>Pressure : {weatherData.main.pressure}</p>
                <p>Wind Speed : {weatherData.wind.speed}m/s</p>
            </>
        ) : (
            <p>Loading weather data...</p>
        )}
        </div>
    );
};

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const API_KEY = "0d3bf85c5d6165db220b90244015d73b"
    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
            );

            setWeatherData(response.data);

            console.log(response.data); //You can see all the weather data in console log

        } catch (error) {

            console.error(error);

        }

    };

    useEffect(() => {

        fetchData();

    }, []);

    const handleInputChange = (e) => {
        setCity(e.target.value);

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        fetchData();

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={handleInputChange}
                />
                <button type="submit">Get Weather</button>
            </form>
            {weatherData ? (
            <>
                <h2>{weatherData.name}</h2>
                <p>Temperature: {weatherData.main.temp}°C</p>

                <p>Description: {weatherData.weather[0].description}</p>
                <p>Feels like : {weatherData.main.feels_like}°C</p>
                <p>Humidity : {weatherData.main.humidity}%</p>
                <p>Pressure : {weatherData.main.pressure}</p>
                <p>Wind Speed : {weatherData.wind.speed}m/s</p>
            </>
        ) : (
            <p>Loading weather data...</p>
        )}
        </div>
    );
};

export { Weather, TodayForecast };