import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testEnvironment: 'jsdom', // Ensure the test environment is set to jsdom for React testing
};

export default config;