module.exports = {
	env: {
		es2021: true,
		node: true,
		'jest/globals': true,
	},
	extends: ['standard', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'prettier', 'jest'],
	rules: {
		'prettier/prettier': 'error',
	},
	globals: {
		ApiTypes: 'readonly',
	},
}
