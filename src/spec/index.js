import pkg from "jest";

const { runCLI } = pkg;

export default async function runTest(testNamePattern) {
  const testFilePath = "src/spec/App.test.tsx";
  const { results } = await runCLI(
    {
      testPathPattern: [testFilePath],
      testNamePattern: [testNamePattern],
      json: true,
    },
    ["."]
  );

  return results.testResults[0];
}
