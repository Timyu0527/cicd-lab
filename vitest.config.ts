import type { TestUserConfig, ViteUserConfig } from 'vitest/config';

type VitestConfig = ViteUserConfig & {
  test?: TestUserConfig;
};

const config: VitestConfig = {
  test: {
    testTimeout: 10000,
    exclude: ['dist/**', 'node_modules/**']
  }
};

export default config;
