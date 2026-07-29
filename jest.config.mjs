/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  coverageProvider: "v8",
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/app/$1",
    "^~components/(.*)$": "<rootDir>/app/components/$1",
    "^~icon/(.*)$": "<rootDir>/app/components/Icon/$1",
    "^~logo/(.*)$": "<rootDir>/app/components/Logo/$1",
    "^~assets/(.*)$": "<rootDir>/public/assets/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
};

export default createJestConfig(config);
