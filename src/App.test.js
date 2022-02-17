import { render, screen } from '@testing-library/react';
import App from './App';

test('busybody', () => {
  render(<App />);
  const linkElement = screen.getByText(/busybody/i);
  expect(linkElement).toBeInTheDocument();
});
