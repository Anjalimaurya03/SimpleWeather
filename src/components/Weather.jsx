import React from "react";
import { Container, Card, Header, Icon, Segment } from "semantic-ui-react";
import axios from "axios";
import styles from "./Weather.module.css";

const Weather = () => {
  const [weatherData, setWeatherData] = React.useState(null);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude: lat, longitude: lon } = position.coords;
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=febb1b7f352c65ffa95b338183d18f22&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        // Add a fallback location in case the user's location cannot be determined
        const fallbackLocation = { lat: 51.5074, lon: -0.1278 }; // London coordinates
        const fallbackResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${fallbackLocation.lat}&lon=${fallbackLocation.lon}&appid=YOUR_API_KEY&units=metric`
        );
        setWeatherData(fallbackResponse.data);
      }
    });
  }, []);

  if (!weatherData) return <div>Loading...</div>;

  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <img className="bg" src="./assets/bg.png" alt= 'bg'/>
        <h1 className={styles.title}>
          {weatherData.name}, {weatherData.sys.country}
        </h1>

        <span className={styles.date}>
          {new Date(weatherData.dt * 1000).toLocaleString()}
        </span>

        <p className={styles.description}>
          <Icon name="cloud" />
          {weatherData.weather[0].description}
        </p>

        <ul className={styles.reports}>
          <li className={styles.report}>
            <img src='./assets/temp.png'/>
            <p className={styles.temp}>{weatherData.main.temp}°C</p>
          </li>

          <li className={styles.report}>
            <img  src="./assets/wind.png" />
            <p className={styles.wind}>{weatherData.wind.speed} m/s</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Weather;
