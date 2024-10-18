import { render, screen } from '@testing-library/react';

import NotFound from './NotFound';

describe('NotFound component', () => {
  test('renders correctly with static content', () => {
    render(<NotFound />);

    expect(screen.getByText(/No weather data found/i)).toBeInTheDocument();

    const iconElement = screen.getByTestId('icon-element');
    expect(iconElement).toBeInTheDocument();
  });
});
