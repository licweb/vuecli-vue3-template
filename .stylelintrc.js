module.exports = {
  root: true,
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-vue'
  ],
  overrides: [
    {
      files: ['**/*.{css,less}'],
      customSyntax: 'postcss-less'
    }
  ],
  rules: {
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'block-opening-brace-space-before': 'always',
    'rule-empty-line-before': 'never-multi-line',
    indentation: 2,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep']
      }
    ]
  }
}
