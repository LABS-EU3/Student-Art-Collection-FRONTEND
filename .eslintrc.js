module.exports = {
  env: {
    browser: true,
    es6: true,
    "jest": true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    "prettier"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react-app',
    'prettier'
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
          "printWidth": 80,
          "trailingComma": "es5",
          "semi": false,
          "jsxSingleQuote": true,
          "singleQuote": true,
          "useTabs": true
      }
  ],
    "react/jsx-filename-extension": ["off"],
    "no-shadow": "off",
    "arrow-parens": "off",
    "comma-dangle": "off",
    "no-underscore-dangle": "off",
    "consistent-return": "off",
    "react/require-default-props": "off",
    "react/jsx-one-expression-per-line": "off",
    "max-len": ["error", 1000],
    "no-param-reassign": "off",
    "prefer-destructuring": [
      "error",
      {
        "VariableDeclarator": {
          "array": false,
          "object": true
        },
        "AssignmentExpression": {
          "array": true,
          "object": false
        }
      },
      {
        "enforceForRenamedProperties": false
      }
    ],
    "import/prefer-default-export": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "camelcase": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [".js", ".jsx"]
      }
    ]
  },
};
