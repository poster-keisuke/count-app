/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  // A list of paths to directories that Jest should use to search for files in
  roots: ["<rootDir>/src"],
  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  reporters: ["default"],
};
