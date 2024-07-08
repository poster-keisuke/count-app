type TestCase = {
  id: string;
  title_ja: string;
  title_en: string;
  description_ja: string;
  description_en: string;
  evaluation_code: string;
};

export const TestCase1: TestCase = {
  id: "test-case-1",
  title_ja: "useStateの第1引数が定義されている",
  title_en: "useState is defined with the first argument",
  description_ja:
    "今回の仕様ではuseStateの第1引数であるcountを利用して、カウントアップされた値を出力します。そのため、このテストケースでは、第1引数が正しく定義されているかをテストします。",
  description_en:
    "In this specification, the first argument of useState is used to output the count-up value. Therefore, we will check whether the first argument of useState is defined.",
  evaluation_code: `node ./run.js`,
};

export const TestCase2: TestCase = {
  id: "test-case-2",
  title_ja: "useStateの第2引数が定義されている",
  title_en: "useState is defined with the second argument",
  description_ja:
    "今回の仕様ではuseStateの第2引数であるコールバック関数を利用して、カウントアップの値を設定します。そのためこのテストケースでは、第2引数が正しく定義されているかをテストします。",
  description_en:
    "In this specification, the second argument of useState is used to set the value of the count-up with a callback function. Therefore, we will check whether the second argument of useState is defined.",
  evaluation_code: `node ./run.js`,
};

export const TestCases: TestCase[] = [TestCase1,TestCase2];
