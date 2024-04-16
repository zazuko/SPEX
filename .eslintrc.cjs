module.exports = {
  root: true,

  env: {
    node: true,
    es2022: true
  },

  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript'
  ],

  parserOptions: {
    parser: '@typescript-eslint/parser'
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'warn',
    'padded-blocks': 'warn',
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
    'func-call-spacing': 'off',
    'no-extra-semi': 'off',
    indent: 'off',
  },
}
