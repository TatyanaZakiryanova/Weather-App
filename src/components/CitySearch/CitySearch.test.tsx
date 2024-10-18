import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import CitySearch from './CitySearch';

const mockOnSearch = jest.fn();

beforeEach(() => {
  mockOnSearch.mockClear();
});

describe('CitySearch component', () => {
  test('renders correctly with initial state', () => {
    render(<CitySearch onSearch={mockOnSearch} />);
    const inputElement = screen.getByPlaceholderText(/Enter your city.../i);
    const buttonElement = screen.getByRole('button');

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test('updates input value on change', () => {
    render(<CitySearch onSearch={mockOnSearch} />);
    const inputElement = screen.getByPlaceholderText(/Enter your city.../i);

    fireEvent.change(inputElement, { target: { value: 'New York' } });

    expect(inputElement).toHaveValue('New York');
  });

  test('calls onSearch function when search button is clicked', () => {
    render(<CitySearch onSearch={mockOnSearch} />);
    fireEvent.change(screen.getByPlaceholderText(/Enter your city.../i), {
      target: { value: 'New York' },
    });
    fireEvent.click(screen.getByRole('button'));
    expect(mockOnSearch).toHaveBeenCalledWith('New York');
  });

  test('calls onSearch with input value when Enter key is pressed', () => {
    render(<CitySearch onSearch={mockOnSearch} />);
    const inputElement = screen.getByPlaceholderText(/Enter your city.../i);

    fireEvent.change(inputElement, { target: { value: 'New York' } });
    fireEvent.keyUp(inputElement, { key: 'Enter', code: 'Enter' });

    expect(mockOnSearch).toHaveBeenCalledWith('New York');
  });

  test('input placeholder changes on focus and blur', () => {
    render(<CitySearch onSearch={mockOnSearch} />);
    const inputElement = screen.getByPlaceholderText(/Enter your city.../i);

    fireEvent.focus(inputElement);
    expect(inputElement).toHaveAttribute('placeholder', '');

    fireEvent.blur(inputElement);
    expect(inputElement).toHaveAttribute('placeholder', 'Enter your city...');
  });
});
