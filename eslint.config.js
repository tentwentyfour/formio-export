import js from '@eslint/js';
import babelParser from '@babel/eslint-parser';
import globals from 'globals';

export default [
  {
    ignores: ['lib/**', 'node_modules/**']
  },

  js.configs.recommended,

  {
    files: ['**/*.js'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      'no-console': 'off',
      'no-undef': 'error',
      'no-prototype-builtins': 'off',
      'no-case-declarations': 'off',
      // 'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-unused-vars': 'off',
    }
  },

  {
    files: ['test/**/*.js'], // only test files
    languageOptions: {
      globals: {
        ...globals.mocha
      }
    },
    rules: {
      'no-unused-expressions': 'off' // allows chai "expect(...).to.equal(...)"
    }
  },

  {
    files: ['webpack.config.mjs'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.node,
        __dirname: 'readonly'
      }
    }
  }
];
