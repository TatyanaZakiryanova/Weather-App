import { FaWind } from 'react-icons/fa';
import { FiBarChart } from 'react-icons/fi';
import { MdWaterDrop } from 'react-icons/md';

import { IWeatherData } from '../WeatherData/types';
import { WeatherImage } from '../WeatherImage/WeatherImage';
import styles from './WeatherDisplay.module.scss';

const WeatherDisplay = ({ weatherData }: { weatherData: IWeatherData }) => {
  return (
    <>
      <div className={styles.weather}>
        <h1>{weatherData.name}</h1>
        <span>{weatherData.sys.country}</span>
        <span className={styles.image} data-testid="weather-icon">
          {WeatherImage(weatherData.weather[0].main)}
        </span>
        <h1>{weatherData.main.temp}°C</h1>
        <h2>{weatherData.weather[0].main}</h2>
        <h3>feels like {weatherData.main.feels_like} °C</h3>
      </div>

      <div className={styles.inform}>
        <div className={styles.wind}>
          <FaWind className={styles.windicon} />
          <div>
            <h2>{weatherData.wind.speed}km/h</h2>
            <p>Wind speed</p>
          </div>
        </div>

        <div className={styles.humidity}>
          <MdWaterDrop className={styles.humidityicon} />
          <div>
            <h2>{weatherData.main.humidity}%</h2>
            <p>Humidity</p>
          </div>
        </div>

        <div className={styles.pressure}>
          <FiBarChart className={styles.pressureicon} />
          <h2>{weatherData.main.pressure} hPa</h2>
          <p>Pressure</p>
        </div>
      </div>
    </>
  );
};

export default WeatherDisplay;
