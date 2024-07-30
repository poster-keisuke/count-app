import * as fs from "fs";
import * as Constants from "./constants";

type TestCaseText = {
  ja: string
  en: string
}

export const writeResult = (
  fileName: string,
  testCaseTitle: TestCaseText,
  testCaseDescription: TestCaseText,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  expected: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  result: any,
  testType: "SYNTAX" | "COMPONENT"
): void => {
  const filePath = `${Constants.EXPORT_RESULT_PATH}/${fileName}.json`;
  fs.writeFileSync(
    filePath,
    JSON.stringify({ title: testCaseTitle, description: testCaseDescription, expected: expected, result: result,type: testType }, null, 2)
  );
};
