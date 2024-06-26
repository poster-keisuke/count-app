import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('should render App component', () => {
  render(<App />);
  const countElement = screen.getByTestId('increase');
  expect(countElement).toHaveTextContent('Increase');
});
