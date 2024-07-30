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
  writeResult(
    TestCases.TestCase1.id,
    { ja: TestCases.TestCase1.title_ja, en: TestCases.TestCase1.title_en },
    {
      ja: TestCases.TestCase1.description_ja,
      en: TestCases.TestCase1.description_en,
    },
    expected,
    result,
    TestCases.TestCase1.test_type
  );
  expect(expected).toBe(result);
});

test(TestCases.TestCase2.id, () => {
  const expected = true;
  const result = Parser.checkUseStateHasSetterFunction(filepath);
  writeResult(
    TestCases.TestCase2.id,
    { ja: TestCases.TestCase2.title_ja, en: TestCases.TestCase2.title_en },
    {
      ja: TestCases.TestCase2.description_ja,
      en: TestCases.TestCase2.description_en,
    },
    expected,
    result,
    TestCases.TestCase2.test_type
  );
  expect(expected).toBe(result);
});

test(TestCases.TestCase3.id, () => {
  const expected = true;
  const result = Parser.checkUseStateImport(filepath);
  writeResult(
    TestCases.TestCase3.id,
    { ja: TestCases.TestCase3.title_ja, en: TestCases.TestCase3.title_en },
    {
      ja: TestCases.TestCase3.description_ja,
      en: TestCases.TestCase3.description_en,
    },
    expected,
    result,
    TestCases.TestCase3.test_type
  );
  expect(expected).toBe(result);
});

test(TestCases.TestCase4.id, () => {
  const expected = true;
  const result = Parser.checkUseStateWithInitialValue(filepath);
  writeResult(
    TestCases.TestCase4.id,
    { ja: TestCases.TestCase4.title_ja, en: TestCases.TestCase4.title_en },
    {
      ja: TestCases.TestCase4.description_ja,
      en: TestCases.TestCase4.description_en,
    },
    expected,
    result,
    TestCases.TestCase4.test_type
  );
  expect(expected).toBe(result);
});

test(TestCases.TestCase5.id, () => {
  const expected = true;
  const result = Parser.checkUseStateNumberInitialValue(filepath);
  writeResult(
    TestCases.TestCase5.id,
    { ja: TestCases.TestCase5.title_ja, en: TestCases.TestCase5.title_en },
    {
      ja: TestCases.TestCase5.description_ja,
      en: TestCases.TestCase5.description_en,
    },
    expected,
    result,
    TestCases.TestCase5.test_type
  );
  expect(expected).toBe(result);
});

test(TestCases.TestCase6.id, () => {
  const expected = true;
  const result = Parser.checkUseStateUsage(filepath);
  writeResult(
    TestCases.TestCase6.id,
    { ja: TestCases.TestCase6.title_ja, en: TestCases.TestCase6.title_en },
    {
      ja: TestCases.TestCase6.description_ja,
      en: TestCases.TestCase6.description_en,
    },
    expected,
    result,
    TestCases.TestCase6.test_type
  );
  expect(expected).toBe(result);
});

test(TestCases.TestCase7.id, async () => {
  const expected = "Count: 1";
  render(<App />);
  const result = screen.getByText(expected);
  writeResult(
    TestCases.TestCase7.id,
    { ja: TestCases.TestCase7.title_ja, en: TestCases.TestCase7.title_en },
    {
      ja: TestCases.TestCase7.description_ja,
      en: TestCases.TestCase7.description_en,
    },
    expected,
    result.textContent,
    TestCases.TestCase7.test_type
  );
  expect(result).toHaveTextContent(expected);
});

test(TestCases.TestCase8.id, async () => {
  const expected = "Count: 2";
  render(<App />);
  // Count up to 2
  const countElement = screen.getByTestId("increase");
  const result = screen.getByText("Count: 1");
  await userEvent.click(countElement);
  writeResult(
    TestCases.TestCase8.id,
    { ja: TestCases.TestCase8.title_ja, en: TestCases.TestCase8.title_en },
    {
      ja: TestCases.TestCase8.description_ja,
      en: TestCases.TestCase8.description_en,
    },
    expected,
    result.textContent,
    TestCases.TestCase8.test_type
  );
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
  writeResult(
    TestCases.TestCase9.id,
    { ja: TestCases.TestCase9.title_ja, en: TestCases.TestCase9.title_en },
    {
      ja: TestCases.TestCase9.description_ja,
      en: TestCases.TestCase9.description_en,
    },
    expected,
    result.textContent,
    TestCases.TestCase9.test_type
  );
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

  writeResult(
    TestCases.TestCase10.id,
    { ja: TestCases.TestCase10.title_ja, en: TestCases.TestCase10.title_en },
    {
      ja: TestCases.TestCase10.description_ja,
      en: TestCases.TestCase10.description_en,
    },
    expected,
    result.textContent,
    TestCases.TestCase10.test_type,
  );
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
  writeResult(
    TestCases.TestCase11.id,
    { ja: TestCases.TestCase11.title_ja, en: TestCases.TestCase11.title_en },
    {
      ja: TestCases.TestCase11.description_ja,
      en: TestCases.TestCase11.description_en,
    },
    expected,
    result.textContent,
    TestCases.TestCase11.test_type,
  );
  expect(result).toBeInTheDocument();
});
