import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  expect(true).toEqual(false)
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
