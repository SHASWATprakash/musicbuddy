import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Music Albums (2020-2024)/);
  expect(linkElement).toBeInTheDocument();
});
