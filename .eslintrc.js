module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    requireConfigFile: false,
  },

  plugins: ['react', 'import', 'jsx-a11y', 'prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
    'no-unused-vars': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
    'default-param-last': 'off',
    parser: '@babel/eslint-parser',
    extends: ['airbnb-base', 'prettier', 'eslint:recommended', 'react-app'],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': 'error',
      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
      'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    },
  },
}
