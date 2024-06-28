import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './App';
import * as ReactModule from 'react';

test('Should be display 1 as initial value', async () => {
  render(<App />);
  screen.getByTestId('increase');
  const count = screen.getByText('Count: 1');
  expect(count).toHaveTextContent('Count: 1');
});

test('Should be increased by 1 when Increase button is clicked', async () => {
  render(<App />);
  // Count up to 2
  const countElement = screen.getByTestId('increase');
  const count = screen.getByText('Count: 1');
  await userEvent.click(countElement);
  expect(count).toHaveTextContent('Count: 2');
});

test('Should be increased by 1 when Increase button is clicked 3 times', async () => {
  render(<App />);
  // Count up to 4
  const countElement = screen.getByTestId('increase');
  const count = screen.getByText('Count: 1');
  await userEvent.click(countElement);
  await userEvent.click(countElement);
  await userEvent.click(countElement);
  expect(count).toHaveTextContent('Count: 4');
});

test('Should be reset to 0 when Reset button is clicked', async () => {
  render(<App />);
  // Count up to 2
  const countElement = screen.getByTestId('increase');
  await userEvent.click(countElement);
  const count = screen.getByText('Count: 2');
  expect(count).toHaveTextContent('Count: 2');

  // Reset count
  const resetElement = screen.getByTestId('reset');
  await userEvent.click(resetElement);

  expect(count).toHaveTextContent('Count: 1');
});

test('Check that useState is called', () => {
  jest.spyOn(ReactModule, 'useState');
  render(<App />);
  expect(ReactModule.useState).toHaveBeenCalled();
});

test('Should reset count when component is re-rendered', async () => {
  const { getByText, unmount } = render(<App />);
  // Count up 1
  const countElement = screen.getByTestId('increase');
  await userEvent.click(countElement);
  expect(getByText('Count: 2')).toBeInTheDocument();

  // Unmount and re-render
  unmount();
  const { getByText: getByTextAfterRemount } = render(<App />);
  expect(getByTextAfterRemount('Count: 1')).toBeInTheDocument();
});
