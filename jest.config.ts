import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './', // your Next.js root dir
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/app/(.*)$': '<rootDir>/app/$1',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};

export default createJestConfig(customJestConfig);
