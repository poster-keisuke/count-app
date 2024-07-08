import * as fs from "fs";
import * as Constants from "./constants";

export const writeResult = (
  fileName: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  expected: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  result: any
): void => {
  const filePath = `${Constants.EXPORT_RESULT_PATH}/${fileName}.json`;
  fs.writeFileSync(
    filePath,
    JSON.stringify({ expected: expected, result: result }, null, 2)
  );
  console.log("DONE");
};
