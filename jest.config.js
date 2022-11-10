/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.test.(ts|tsx|js)'],
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  moduleNameMapper: {
    '^common$': '<rootDir>/packages/common/src',
  },
}
