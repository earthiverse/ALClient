/** @type {import('ts-jest').JestConfigWithTsJest} **/
import dotenv from "dotenv";

// Environment variables specifically for jest can be placed in a .env file in the tests directory
dotenv.config({
  path: "tests/.env",
});

export default {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", { tsconfig: "./tsconfig.jest.json" }],
  },
  moduleNameMapper: {
    "(.+)\\.js": "$1",
  },
  setupFilesAfterEnv: ["dotenv/config"],
};
