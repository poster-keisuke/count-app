import * as fs from "fs";
import runTest from "./src/spec/index.js";

export const main = async () => {
  const testNamePattern = process.argv.slice(2);
  if (!testNamePattern) {
    console.err("Please specify the test name pattern");
    return;
  }
  const testResult = await runTest(testNamePattern);

  if (testResult) {
    const filePath = `src/spec/__result__/${testNamePattern}.json`;
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.log("err");
      }

      const testResult = JSON.parse(data);
      const evaluationResult = {
        score: 0,
        version: "v1.0.0",
        blocks: [
          {
            type: "header",
            vale: {
              ja: "テスト結果",
              en: "Test Result",
            },
          },
          {
            type: "diff",
            vale: {
              left: testResult.expected,
              right: testResult.result,
            },
          },
        ],
      };

      console.log(evaluationResult);
    });
  }
};

main();
