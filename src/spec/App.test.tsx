import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as path from "path";
import App from "../App";
import * as TestCases from "./testcases";
import * as Parser from "./util/parser";
import { writeResult } from "./util/writeResult";

const filepath = path.resolve(__dirname, "..", "App.tsx");

test(TestCases.TestCase1.id, () => {
  const expected = true;
  const result = Parser.checkUseStateHasInitialArgument(filepath);
  writeResult(TestCases.TestCase1.id, expected, result);
  expect(expected).toBe(result);
});

test(TestCases.TestCase2.id, () => {
  const expected = true;
  const result = Parser.checkUseStateHasSetterFunction(filepath);
  writeResult(TestCases.TestCase2.id, expected, result);
  expect(expected).toBe(result);
});

test(TestCases.TestCase3.id, () => {
  const expected = true;
  const result = Parser.checkUseStateImport(filepath);
  writeResult(TestCases.TestCase3.id, expected, result);
  expect(expected).toBe(result);
});

test(TestCases.TestCase4.id, () => {
  const expected = true;
  const result = Parser.checkUseStateWithInitialValue(filepath);
  writeResult(TestCases.TestCase4.id, expected, result);
  expect(expected).toBe(result);
});

test(TestCases.TestCase5.id, () => {
  const expected = true;
  const result = Parser.checkUseStateNumberInitialValue(filepath);
  writeResult(TestCases.TestCase5.id, expected, result);
  expect(expected).toBe(result);
});

test(TestCases.TestCase6.id, () => {
  const expected = true;
  const result = Parser.checkUseStateUsage(filepath);
  writeResult(TestCases.TestCase6.id, expected, result);
  expect(expected).toBe(result);
});

test(TestCases.TestCase7.id, async () => {
  const expected = "Count: 1";
  render(<App />);
  const result = screen.getByText(expected);
  writeResult(TestCases.TestCase7.id, expected, result.textContent);
  expect(result).toHaveTextContent(expected);
});

test(TestCases.TestCase8.id, async () => {
  const expected = "Count: 2";
  render(<App />);
  // Count up to 2
  const countElement = screen.getByTestId("increase");
  const result = screen.getByText("Count: 1");
  await userEvent.click(countElement);
  writeResult(TestCases.TestCase8.id, expected, result.textContent);
  expect(result).toHaveTextContent(expected);
});

test(TestCases.TestCase9.id, async () => {
  const expected = "Count: 4";
  render(<App />);
  // Count up to 4
  const countElement = screen.getByTestId("increase");
  const result = screen.getByText("Count: 1");
  await userEvent.click(countElement);
  await userEvent.click(countElement);
  await userEvent.click(countElement);
  writeResult(TestCases.TestCase9.id, expected, result.textContent);
  expect(result).toHaveTextContent(expected);
});

test(TestCases.TestCase10.id, async () => {
  const expected = "Count: 1";
  render(<App />);
  // Count up to 2
  const countElement = screen.getByTestId("increase");
  await userEvent.click(countElement);
  const result = screen.getByText("Count: 2");
  expect(result).toHaveTextContent("Count: 2");

  // Reset count
  const resetElement = screen.getByTestId("reset");
  await userEvent.click(resetElement);

  writeResult(TestCases.TestCase10.id, expected, result.textContent);
  expect(result).toHaveTextContent(expected);
});

test(TestCases.TestCase11.id, async () => {
  const expected = "Count: 1";
  const { getByText, unmount } = render(<App />);
  // Count up 1
  const countElement = screen.getByTestId("increase");
  await userEvent.click(countElement);
  expect(getByText("Count: 2")).toBeInTheDocument();

  // Unmount and re-render
  unmount();
  const { getByText: getByTextAfterRemount } = render(<App />);
  const result = getByTextAfterRemount(expected);
  writeResult(TestCases.TestCase10.id, expected, result.textContent);
  expect(result).toBeInTheDocument();
});
