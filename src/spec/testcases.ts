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
  title_ja: "useStateの返り値として1つ目の変数が定義されている",
  title_en: "The first variable is defined as the return value of useState",
  description_ja:
    "今回の仕様ではuseStateの返り値である1つ目の変数を利用して、カウントアップされた値を出力します。そのため、このテストケースでは、返り値の1つ目の変数が正しく定義されているかをテストします。",
  description_en:
    "In this specification, the first variable of the return value of useState is used to output the counted-up value. Therefore, we will check whether the first variable of the return value is correctly defined.",
  evaluation_code: `node ./run.js`,
};

export const TestCase2: TestCase = {
  id: "test-case-2",
  title_ja: "useStateの返り値として2つ目の変数が定義されている",
  title_en: "The second variable is defined as the return value of useState",
  description_ja:
    "今回の仕様ではuseStateの返り値である2つ目のコールバック関数を利用して、カウントアップされた値を変更します。そのため、このテストケースでは、返り値の2つ目のコールバック関数が正しく定義されているかをテストします。",
  description_en:
    "In this specification, the second variable of the return value of useState is used to change the counted-up value. Therefore, we will check whether the second variable of the return value is correctly defined.",
  evaluation_code: `node ./run.js`,
};

export const TestCase3: TestCase = {
  id: "test-case-3",
  title_ja: "useStateがimportされている",
  title_en: "useState is imported",
  description_ja:
    "今回の仕様ではuseStateを利用してカウンターの実装を行う必要があります。そのため、このテストケースでは、useStateが正しくimportされているかをテストします。",
  description_en:
    "In this specification, you need to implement a counter using useState. Therefore, we will check whether useState is correctly imported.",
  evaluation_code: `node ./run.js`,
};

export const TestCase4: TestCase = {
  id: "test-case-4",
  title_ja: "useStateの引数が1つ以上渡されている",
  title_en: "useState is passed one or more arguments",
  description_ja:
    "今回の仕様ではuseStateの初期値として値を定義して利用します。そのため、このテストケースでは、初期値として値が定義されているかをテストします。",
  description_en:
    "In this specification, you will define and use a value as the initial value of useState. Therefore, we will check whether a value is defined as the initial value.",
  evaluation_code: `node ./run.js`,
};

export const TestCase5: TestCase = {
  id: "test-case-5",
  title_ja: "useStateの引数がNumber型で定義されている",
  title_en: "useState's argument is defined as a Number type",
  description_ja:
    "今回の仕様ではuseStateの初期値として値を定義して利用します。また、カウンターは数値で定義されている必要があります。そのため、このテストケースでは、初期値としての値がNumber型として定義されているかをテストします。",
  description_en:
    "In this specification, you will define and use a value as the initial value of useState. Also, the counter must be defined as a number. Therefore, we will check whether the value as the initial value is defined as a Number type.",
  evaluation_code: `node ./run.js`,
};

export const TestCase6: TestCase = {
  id: "test-case-6",
  title_ja: "useStateがコード内で利用されている",
  title_en: "useState is used in the code",
  description_ja:
    "今回の仕様ではuseStateを利用してカウンターアプリを実装します。そのため、このテストケースでは、useStateがコード内で正しく利用されているかをテストします。",
  description_en:
    "In this specification, you will implement a counter app using useState. Therefore, we will check whether useState is correctly used in the code.",
  evaluation_code: `node ./run.js`,
};

export const TestCase7: TestCase = {
  id: "test-case-7",
  title_ja: "初期値が表示される",
  title_en: "The initial value is displayed",
  description_ja:
    "useStateの初期値が画面に表示されることを確認します。正しく表示される場合、Countは1を示します。",
  description_en:
    "Check that the initial value of useState is displayed on the screen. If it is displayed correctly, Count will show 1.",
  evaluation_code: `node ./run.js`,
};

export const TestCase8: TestCase = {
  id: "test-case-8",
  title_ja: "カウントボタンを1回クリックすると値が1増える",
  title_en: "The value increases by 1 when the count button is clicked once",
  description_ja:
    "useStateのコールバック関数を利用して、カウントアップを行います。このテストケースでは、ボタンをクリックすることで、Countの値が1増えることを確認します。",
  description_en:
    "Use the callback function, which is the second argument of useState, to count up. In this test case, we will check that the value of Count increases by 1 when the button is clicked.",
  evaluation_code: `node ./run.js`,
};

export const TestCase9: TestCase = {
  id: "test-case-9",
  title_ja: "カウントボタンを3回クリックすると値が3増える",
  title_en:
    "The value increases by 3 when the count button is clicked three times",
  description_ja:
    "useStateのコールバック関数を利用して、カウントアップを行います。このテストケースでは、ボタンを3回クリックすることで、Countの値が3増えることを確認します。",
  description_en:
    "Use the callback function, which is the second argument of useState, to count up. In this test case, we will check that the value of Count increases by 3 when the button is clicked three times.",
  evaluation_code: `node ./run.js`,
};

export const TestCase10: TestCase = {
  id: "test-case-10",
  title_ja: "リセットボタンを押すと値がリセットされる",
  title_en: "The value is reset when the reset button is clicked",
  description_ja:
    "カウントの値を初期値にリセットします。このテストケースでは、リセットボタンを押すことで、Countの値が1にリセットされることを確認します。",
  description_en:
    "Reset the value of the count to the initial value. In this test case, we will check that the value of Count is reset to 1 when the reset button is clicked.",
  evaluation_code: `node ./run.js`,
};

export const TestCase11: TestCase = {
  id: "test-case-11",
  title_ja:
    "リロードした際に、コンポーネントがリレンダリングされ値がリセットされる",
  title_en:
    "When reloaded, the component is re-rendered and the value is reset",
  description_ja:
    "このテストケースでは、リロードを行うことで、コンポーネントがリレンダリングされ、カウントの値がリセットされることを確認します。",
  description_en:
    "By reloading, the component is re-rendered, and the value of the count is reset.",
  evaluation_code: `node ./run.js`,
};

export const TestCases: TestCase[] = [
  TestCase1,
  TestCase2,
  TestCase3,
  TestCase4,
  TestCase5,
  TestCase6,
  TestCase7,
  TestCase8,
  TestCase9,
  TestCase10,
  TestCase11,
];
