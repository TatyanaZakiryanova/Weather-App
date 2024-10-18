import { render, screen } from '@testing-library/react';

import Spinner from './Spinner';

describe('Spinner component', () => {
  test('renders correctly', () => {
    render(<Spinner />);

    expect(screen.getByText(/Please wait.../i)).toBeInTheDocument();

    const iconElement = screen.getByTestId('icon-element');
    expect(iconElement).toBeInTheDocument();
  });
});
