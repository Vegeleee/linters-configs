module.exports = {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-rational-order',
		'stylelint-prettier/recommended',
	],
	plugins: ['stylelint-order', 'stylelint-scss'],
	rules: {
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['include', 'mixin', 'use', 'if', 'else'],
			},
		],
	},
}
