module.exports = {
  //* Configuration for JavaScript files (global)
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
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
    'no-console': 'off'
  },
  overrides: [
    //* Configuration for TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json']
      },
      plugins: ['react', 'react-hooks', '@typescript-eslint', 'import', '@emotion', '@xsolare'],
      extends: [
        'next/core-web-vitals',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'prettier',
        'plugin:prettier/recommended'
      ],
      rules: {
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
            disallowTypeAnnotations: false
          }
        ],
        'react/prop-types': 'off',
        'no-unused-vars': 'off',
        'no-param-reassign': [
          'warn',
          {
            props: true,
            ignorePropertyModificationsFor: ['state']
          }
        ],
        'no-restricted-globals': 'off',
        'no-use-before-define': 'off',
        'no-return-assign': 'off',
        'no-debugger': 'warn',
        'no-underscore-dangle': 'off',
        'no-console': 'off',
        'class-methods-use-this': 'off',
        'no-useless-escape': 'off',
        'no-promise-executor-return': 'off',
        'consistent-return': 'off',
        'default-param-last': 'off',
        camelcase: 'error',
        'spaced-comment': 'error',
        quotes: ['error', 'single'],
        'no-undef': 'off',

        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': [
          'error',
          {
            ts: 'never',
            tsx: 'never',
            scss: 'off'
          }
        ],
        'react/jsx-no-constructed-context-values': 'off',

        'react/function-component-definition': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/display-name': ['off', { ignoreTranspilerName: true }],
        'react-hooks/exhaustive-deps': 'off',
        'react-hooks/rules-of-hooks': 'off',
        'react/jsx-no-useless-fragment': 'off',

        '@emotion/jsx-import': 'error',
        '@emotion/no-vanilla': 'error',
        '@emotion/import-from-emotion': 'error',
        '@emotion/styled-import': 'error',

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
        'react/self-closing-comp': ['error', { component: true }],
        'react/jsx-boolean-value': ['error'],
        '@xsolare/no-none-root-import-paths': [
          'warn',
          { allowSameFolder: true, rootDir: 'src', prefix: '#' }
        ]
      }
    }
    //* Configuration for Jest test files
    // {
    //   files: ['**/*.test.ts', '**/*.test.tsx'],
    //   plugins: ['jest', 'jest-formatting', 'testing-library', 'jest-dom'],
    //   extends: [
    //     'plugin:jest/recommended',
    //     'plugin:jest-formatting/recommended',
    //     'plugin:testing-library/react',
    //     'plugin:jest-dom/recommended'
    //   ],
    //   rules: {
    //     '@typescript-eslint/no-unsafe-call': 'off',
    //     'jest-dom/prefer-in-document': 'off'
    //   }
    // }
  ]
}
