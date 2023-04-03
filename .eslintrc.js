module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  plugins: [
    'prettier',
    'react',
    'react-hooks',
    '@typescript-eslint',
    'import',
    '@emotion',
    '@xsolare'
  ],
  extends: [
    'next/core-web-vitals',
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  ignorePatterns: ['**/*.d.ts', '.*.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'none',
        printWidth: 100,
        tabWidth: 2,
        semi: false,
        bracketSameLine: true,
        endOfLine: 'auto'
      }
    ],
    'no-console': 'off',
    'import/order': [
      'warn',
      {
        groups: [
          'type',
          'builtin',
          'external',
          'internal',
          'unknown',
          'parent',
          'sibling',
          'index',
          'object'
        ],
        alphabetize: { order: 'asc', caseInsensitive: true }
      }
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: false
      }
    ],
    '@xsolare/no-none-root-import-paths': [
      'warn',
      { allowSameFolder: true, rootDir: 'src', prefix: '#' }
    ],

    //* other
    'no-useless-escape': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/ban-types': 'off',
    'import/no-cycle': 'off'
  }
}
