import { useEffect, useState } from 'react';
import { HandleSearchFunction, IWeatherData } from './types';
import CitySearch from './CitySearch';
import WeatherDisplay from './WeatherDisplay';
import { fetchWeatherDataCity } from './WeatherCity';
import { fetchWeatherByCoords } from './WeatherCoords';

const WeatherData = () => {
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchWeatherByGeolocation = async () => {
      try {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const [currentWeather] = await Promise.all([fetchWeatherByCoords(latitude, longitude)]);
          setWeatherData(currentWeather);
          setIsLoading(true);
        });
      } catch (error) {
        console.error('Error fetching weather by geolocation:', error);
      }
    };
    fetchWeatherByGeolocation();
  }, [fetchWeatherByCoords]);

  const handleSearch: HandleSearchFunction = async (city: string) => {
    try {
      const currentWeatherData = await fetchWeatherDataCity(city);
      setWeatherData(currentWeatherData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      {isLoading ? (
        <div>
          <CitySearch onSearch={handleSearch} />
          {weatherData ? <WeatherDisplay weatherData={weatherData} /> : <div>Data not found</div>}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default WeatherData;
