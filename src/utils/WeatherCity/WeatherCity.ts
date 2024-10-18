import axios from 'axios';

import { apiEndpoint, apiKey } from '../../components/WeatherData/api';
import { WeatherCityFunction } from '../../components/WeatherData/types';

const fetchWeatherDataCity: WeatherCityFunction = async (city) => {
  try {
    const response = await axios.get(
      `${apiEndpoint}weather?q=${city}&appid=${apiKey}&units=metric`,
    );
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export default fetchWeatherDataCity;
