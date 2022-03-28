module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
    'vue/setup-compiler-macros': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-essential'
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'vue'
  ],
  'rules': {
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'no-console': 1,
    'no-var': 2,
    'object-curly-spacing': [2, 'always'],
    'block-spacing': [2, 'never'],
    'no-trailing-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 2,
  }
}
