import { glob } from "glob";
import fs from "node:fs";
import runTest from "./src/spec/index.js";

const getFilesFromFilePath = () => {
  return glob.sync(`src/spec/__result__/*`);
};

const formatSyntaxTestResult = (result) => {
  return [
    {
      type: "mark",
      value: result.expected === result.result ? true : false,
    },
    {
      type: "header",
      value: {
        ja: result.title.ja,
        en: result.title.en,
      },
    },
    {
      type: "markdown",
      value: {
        ja: result.description.ja,
        en: result.description.en,
      },
    },
  ];
};

const formatComponentTestResult = (result) => {
  return [
    {
      type: "mark",
      value: result.expected === result.result ? true : false,
    },
    {
      type: "header",
      value: {
        ja: result.title.ja,
        en: result.title.en,
      },
    },
    {
      type: "markdown",
      value: {
        ja: result.description.ja,
        en: result.description.en,
      },
    },
    {
      type: "text_diff_viewer",
      value: {
        original: result.result,
        modified: result.expected,
        language: "html",
      },
    },
  ];
};

export const main = async () => {
  let testNamePattern = process.argv.slice(2);
  if (!testNamePattern) {
    testNamePattern = "*";
  }

  const testResult = await runTest(testNamePattern);

  if (testResult) {
    let correctness = 0;
    const blocks = [];
    const files = getFilesFromFilePath(testNamePattern);

    files.forEach((file) => {
      const data = fs.readFileSync(file, "utf8");

      try {
        const testResult = JSON.parse(data);

        if (testResult.expected === testResult.result) {
          correctness += 1;
        }

        switch (testResult.type) {
          case "SYNTAX": {
            const result = formatSyntaxTestResult(testResult);
            blocks.push(result);
            break;
          }
          case "COMPONENT": {
            const result = formatComponentTestResult(testResult);
            blocks.push(result);
            break;
          }
          default:
            break;
        }
      } catch (e) {
        console.log(e);
      }
    });

    const evaluationResult = {
      version: "v1.0.0",
      metrics: [
        {
          title: {
            ja: "正解率",
            en: "Correctness",
          },
          score: Math.trunc(correctness / files.length),
        },
      ],
      blocks: blocks,
    };

    console.log(JSON.stringify(evaluationResult, null, 2));
  }
};

main();
