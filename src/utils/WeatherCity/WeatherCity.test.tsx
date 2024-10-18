import { apiEndpoint, apiKey } from '../../components/WeatherData/api';
import mockedAxios from '../../mocks/mockAxios';
import mockWeatherData from '../../mocks/mockWeatherData';
import fetchWeatherDataCity from './WeatherCity';

beforeEach(() => {
  mockedAxios.get.mockClear();
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('fetchWeatherDataCity', () => {
  test('fetchWeatherDataCity makes a correct API call', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: mockWeatherData });

    const data = await fetchWeatherDataCity('New York');

    expect(mockedAxios.get).toHaveBeenCalledWith(
      `${apiEndpoint}weather?q=New York&appid=${apiKey}&units=metric`,
    );

    expect(data).toEqual(mockWeatherData);
  });

  test('fetchWeatherDataCity handles errors', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('API Error'));

    const data = await fetchWeatherDataCity('New York');

    expect(data).toBeNull();
  });
});
