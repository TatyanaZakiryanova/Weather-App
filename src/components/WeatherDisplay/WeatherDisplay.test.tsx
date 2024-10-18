import { render, screen } from '@testing-library/react';

import mockWeatherData from '../../mocks/mockWeatherData';
import WeatherDisplay from './WeatherDisplay';

describe('WeatherDisplay', () => {
  test('renders weather data correctly', () => {
    render(<WeatherDisplay weatherData={mockWeatherData} />);

    const iconElement = screen.getByTestId('weather-icon');
    expect(iconElement).toContainElement(screen.getByTestId('MdSunny'));

    expect(screen.getByText(/New York/i)).toBeInTheDocument();
    expect(screen.getByText(/US/i)).toBeInTheDocument();
    expect(screen.getByText(/22°C/i)).toBeInTheDocument();
    expect(screen.getByText(/Clear/i)).toBeInTheDocument();
    expect(screen.getByText(/feels like 21 °C/i)).toBeInTheDocument();

    expect(screen.getByText(/5km\/h/i)).toBeInTheDocument();
    expect(screen.getByText(/Wind speed/i)).toBeInTheDocument();

    expect(screen.getByText(/65%/i)).toBeInTheDocument();
    expect(screen.getByText(/Humidity/i)).toBeInTheDocument();

    expect(screen.getByText(/1012 hPa/i)).toBeInTheDocument();
    expect(screen.getByText(/Pressure/i)).toBeInTheDocument();
  });
});
