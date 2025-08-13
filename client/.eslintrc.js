module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
  ],
  rules: {
    'prefer-const': 'error',
    'no-var': 'error',
    'eqeqeq': ['error', 'always'],
    'curly': ['error', 'all'],
    'no-console': 'warn',
  },
  ignorePatterns: ['build/', 'node_modules/', 'public/'],
};
