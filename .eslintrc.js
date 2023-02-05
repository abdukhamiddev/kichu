module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true, 
      },
    tailwindcss: {
      // These are the default values but feel free to customize
      callees: ['classnames', 'clsx', 'ctl'],
      config: 'tailwind.config.js',
      cssFiles: [
        '**/*.css',
        '!**/node_modules',
        '!**/.*',
        '!**/dist',
        '!**/build',
      ],
      cssFilesRefreshRate: 5_000,
      removeDuplicates: true,
      skipClassAttribute: false,
      whitelist: [],
      tags: [],
      classRegex: '^class(Name)?$', // can be modified to support custom attributes. E.g. "^tw$" for `twin.macro`
    },
    'import/resolver': {
      alias: {
        extensions: ['.js', '.jsx','.ts','.tsx'],
        map: [
          ['@', '.'],
        ],
      },
    },

  },
  extends: [
    'plugin:@next/next/recommended',
    'airbnb',
    'plugin:tailwindcss/recommended',
    'plugin:@typescript-eslint/recommended',
    "eslint:recommended", "next",
    "next/core-web-vitals",
  ],

  parser: '@typescript-eslint/parser',
    parserOptions: {
      project: ['./tsconfig.json'],
      tsconfigRootDir: __dirname,
      sourceType:module
    }, 
  root:true,
  plugins: [
    'react', '@typescript-eslint', 'import',
  ],
  rules: {
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/enforces-negative-arbitrary-values': 'warn',
    'tailwindcss/enforces-shorthand': 'warn',
    'tailwindcss/migration-from-tailwind-2': 'warn',
    'tailwindcss/no-arbitrary-value': 'off',
    'tailwindcss/no-custom-classname': 'warn',
    'tailwindcss/no-contradicting-classname': 'error',
    'react/no-unescaped-entities': 0,
    'eslintreact/no-danger': 0,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-first-prop-new-line': 0,
    'no-console': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'no-nested-ternary': 0,
    'consistent-return': 0,
    'no-alert': 0,
    'react/jsx-no-constructed-context-values': 0,
    'import/extensions': 0,
    'react/prop-types': 0,
    'linebreak-style': 0,
    'react/state-in-constructor': 0,
    'import/prefer-default-export': 0,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'max-len': [
      2,
      1050,
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '_d',
          '_dh',
          '_h',
          '_id',
          '_m',
          '_n',
          '_t',
          '_text',
        ],
      },
    ],
    'object-curly-newline': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: [
          'Link',
        ],
        specialLink: [
          'to',
          'hrefLeft',
          'hrefRight',
        ],
        aspects: [
          'noHref',
          'invalidHref',
          'preferButton',
        ],
      },
    ],
  },
}
}
