import js from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{ ignores: ['dist', 'node_modules', 'coverage'] },
	{
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommended,
			prettierPlugin,
		],
		files: ['**/*.{ts,tsx,js,cjs,mjs}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			'simple-import-sort': simpleImportSort,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true },
			],
			'simple-import-sort/imports': [
				'error',
				{
					groups: [
						['^react'],
						['^@?\\w'],
						['^(@|components)(/.*|$)'],
						['^\\u0000'],
						['^\\.\\.(?!/?$)', '^\\.\\./?$'],
						['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
					],
				},
			],
			'simple-import-sort/exports': 'error',
			'prettier/prettier': [
				'warn',
				{
					printWidth: 80,
					singleQuote: true,
					jsxSingleQuote: false,
					trailingComma: 'es5',
					semi: true,
				},
			],
		},
	}
);
