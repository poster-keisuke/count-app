import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as path from 'path';
import App from './App';
import * as Parser from './parser';

test('初期値が表示される', async () => {
  render(<App />);
  screen.getByTestId('increase');
  const count = screen.getByText('Count: 1');
  expect(count).toHaveTextContent('Count: 1');
});

test('カウントボタンを1回クリックすると値が1増える', async () => {
  render(<App />);
  // Count up to 2
  const countElement = screen.getByTestId('increase');
  const count = screen.getByText('Count: 1');
  await userEvent.click(countElement);
  expect(count).toHaveTextContent('Count: 2');
});

test('カウントボタンを3回クリックすると値が3増える', async () => {
  render(<App />);
  // Count up to 4
  const countElement = screen.getByTestId('increase');
  const count = screen.getByText('Count: 1');
  await userEvent.click(countElement);
  await userEvent.click(countElement);
  await userEvent.click(countElement);
  expect(count).toHaveTextContent('Count: 4');
});

test('リセットボタンを押すと値がリセットされる', async () => {
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

test('リロードした際に、コンポーネントがリレンダリングされ値がリセットされる', async () => {
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

test('useStateがimportされている', () => {
  const filepath = path.resolve(__dirname, 'App.tsx');
  expect(Parser.checkUseStateImport(filepath)).toBe(true);
});

test('useStateの引数が1つ以上渡されている', () => {
  const filepath = path.resolve(__dirname, 'App.tsx');
  expect(Parser.checkUseStateWithInitialValue(filepath)).toBe(true);
});

test('useStateの引数がNumber型で定義されている', () => {
  const filepath = path.resolve(__dirname, 'App.tsx');
  expect(Parser.checkUseStateNumberInitialValue(filepath)).toBe(true);
});

test('useStateがコード内で利用されている', () => {
  const filepath = path.resolve(__dirname, 'App.tsx');
  expect(Parser.checkUseStateUsage(filepath)).toBe(true);
});

test('useStateの第一引数が定義されている', () => {
  const filepath = path.resolve(__dirname, 'App.tsx');
  expect(Parser.checkUseStateHasInitialArgument(filepath)).toBe(true);
});

test('useStateの第二引数が定義されている', () => {
  const filepath = path.resolve(__dirname, 'App.tsx');
  expect(Parser.checkUseStateHasSetterFunction(filepath)).toBe(true);
});
