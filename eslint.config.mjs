import globals from 'globals'
import pluginJs from '@eslint/js'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.js'],
    ignores: ['node_modules', 'dist', 'build'],
    languageOptions: {
      sourceType: 'module'
    }
  },

  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended
]
