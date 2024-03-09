const stylistic = require('@stylistic/eslint-plugin');

const customized = stylistic.configs.customize({
  indent: 2,
  quotes: 'single',
  semi: true,
  jsx: true,
});

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'plugin:compat/recommended',
    'eslint:recommended',
    'htmlacademy/vanilla',
    'plugin:vue/vue3-recommended',
    'plugin:@stylistic/recommended-extends',
  ],
  plugins: [
    'vue',
    'compat',
    '@stylistic',
    'prefer-arrow',
  ],
  rules: {
    ...customized.rules,
    '@stylistic/brace-style': ['error', '1tbs'],
    '@stylistic/arrow-parens': ['error', 'always'],
    'vue/singleline-html-element-content-newline': 0,
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/no-v-html': 0,
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 3,
      },
      multiline: {
        max: 1,
      },
    }],
    '@stylistic/max-len': ['error', {
      code: 80,
      ignoreComments: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignorePattern: "d=.*|<!--.*|class=.*|src=.*"
    }],
    'indent': 0,
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxBOF: 0,
        maxEOF: 1,
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    'curly': ['error', 'all'],
    'quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        'disallowPrototype': true,
        'singleReturnOnly': false,
        'classPropertiesAllowed': false
      }
    ],
    'prefer-arrow-callback': [
      'error',
      { 'allowNamedFunctions': true }
    ],
    'func-style': [
      'error',
      'expression',
      { 'allowArrowFunctions': true }
    ],
    'check-file/filename-naming-convention': ['error', {
      '**/*.js': 'KEBAB_CASE',
      'src/composables/*.js': 'CAMEL_CASE'
    }],
    'check-file/folder-naming-convention': ['error', {
      'src/modules/*/': 'PASCAL_CASE'
    }],
  },
};
