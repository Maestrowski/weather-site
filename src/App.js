import "./App.css";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./components/api";
import { useState } from "react";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&exclude={part}&appid=${WEATHER_API_KEY}`
    );

    Promise.all([currentWeatherFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();

      setCurrentWeather({city: searchData.label, ...weatherResponse})
    })
    .catch((err) => console.log(err));
  }


  return (
    <body>
      /swenyee work here now 2.1
      {/* binula test */}
      <div class="top-black-bar">
        <div class="greybar-in-blackbar">
          <div class="location-name">Will it change after commit</div>
          <div class="under-location-name">
            <div class= "small-icons-under-name">
              <p>5°C</p>
              </div>
            <div class="small-icons-under-name">
              <img src={require("./assets/clear_day.png") }/>
            </div>
          </div>
        </div>
      </div>
      /to here
      <div class="temp-of-day-section">
        <div class="temp-of-day-block">
          Temperature for the day
          <div class="weather-details-time">
            <div class="time">Now</div>
            <div class="time">01</div>
            <div class="time">02</div>
            <div class="time">03</div>
            <div class="time">04</div>
            <div class="time">05</div>
            <div class="time">06</div>
            <div class="time">07</div>
            <div class="time">08</div>
            <div class="time">09</div>
            <div class="time">10</div>
            <div class="time">11</div>
            <div class="time">12</div>
          </div>
          <div class="weather-details-icon">
            <div class="icon">
              <img src={require("./assets/🦆 icon _cloud_.png")} />
            </div>
            <div class="icon">
              <img src={require("./assets/🦆 icon _cloud_.png")} />
            </div>
            <div class="icon">
              <img src={require("./assets/🦆 icon _cloud_.png")} />
            </div>
            <div class="icon">
              <img src={require("./assets/🦆 icon _cloud_.png")} />
            </div>
            <div class="icon">
              <img src={require("./assets/🦆 icon _rain_.png")} />
            </div>
            <div class="icon">
              <img src={require("./assets/🦆 icon _rain_.png")} />
            </div>
            <div class="icon">
              <img src={require("./assets/🦆 icon _rain_.png")} />
            </div>
            <div class="icon">
              <img src={require("./assets/🦆 icon _storm showers_.png")} />
            </div>
            <div class="icon">
              <img src={require("./assets/🦆 icon _storm showers_.png")} />
            </div>
            <div class="icon">
              <img src={require("./assets/🦆 icon _cloud_.png")} />
            </div>
            <div class="icon">
              <img src={require("./assets/🦆 icon _cloud_.png")} />
            </div>
            <div class="icon">
              <img src={require("./assets/clear_day.png")} />
            </div>
            <div class="icon">
              <img src={require("./assets/🦆 icon _cloud_.png")} />
            </div>
          </div>
          <div class="weather-details-temp">
            <div class="temp">5°C</div>
            <div class="temp">5°C</div> 
            <div class="temp">4°C</div>
            <div class="temp">4°C</div>
            <div class="temp">3°C</div>
            <div class="temp">3°C</div>
            <div class="temp">3°C</div>
            <div class="temp">2°C</div>
            <div class="temp">2°C</div>
            <div class="temp">3°C</div>
            <div class="temp">4°C</div>
            <div class="temp">5°C</div>
            <div class="temp">5°C</div>
          </div>
        </div>
      </div>
      /Maks to edit
      <div class="info-block-bottum">
        <div class="weekly-info-block-left">
          <div class="each-column">
            <div class="column">Today</div>
            <div class="column">Monday</div>
            <div class="column">Tuesday</div>
            <div class="column">Wednesday</div>
            <div class="column">Thursday</div>
            <div class="column">Friday</div>
            <div class="column">Saturday</div>
            <div class="column">Sunday</div>
          </div>
          <div class="each-column">
            <div class="column">4°C</div>
            <div class="column">5°C</div>
            <div class="column">5°C</div>
            <div class="column">3°C</div>
            <div class="column">6°C</div>
            <div class="column">6°C</div>
            <div class="column">7°C</div>
            <div class="column">7°C</div>
          </div>
          <div class="each-column">
            <div class="column">
              <img src={require("./assets/🦆 icon _cloud_.png")} />
            </div>
            <div class="column">
              <img src={require("./assets/🦆 icon _cloud_.png")} />
            </div>
            <div class="column">
              <img src={require("./assets/🦆 icon _rain_.png")} />
            </div>
            <div class="column">
              <img src={require("./assets/🦆 icon _storm showers_.png")} />
            </div>
            <div class="column">
              <img src={require("./assets/🦆 icon _cloud_.png")} />
            </div>
            <div class="column">
              <img src={require("./assets/🦆 icon _cloud_.png")} />
            </div>
            <div class="column">
              <img src={require("./assets/clear_day.png")} />
            </div>
            <div class="column">
              <img src={require("./assets/clear_day.png")} />
            </div>
          </div>
        </div>
        //To here
        <div class="icon-info-middle">
          <div class="four-block-info">
            <div class="single-block-info">info1</div>
            <div class="single-block-info">info2</div>
            <div class="single-block-info">info3</div>
            <div class="single-block-info">info4</div>
          </div>
        </div>
        <div class="map-info-right">
          <div>
            <img
              class="map-image"
              src={"./assets/a043430d44beed64b749405a521106e7-2.jpeg"}
            />
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
