import axios, { AxiosResponse } from 'axios';

import { apiEndpoint, apiKey } from '../../components/WeatherData/api';
import { FetchWeatherByCoordsFunction, IWeatherData } from '../../components/WeatherData/types';

export const fetchWeatherByCoords: FetchWeatherByCoordsFunction = async (latitude, longitude) => {
  try {
    const response: AxiosResponse<IWeatherData> = await axios.get(
      `${apiEndpoint}weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`,
    );
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};
