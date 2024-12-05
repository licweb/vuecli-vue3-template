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
    'rule-empty-line-before': 'never-multi-line',
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep']
      }
    ]
  }
}
