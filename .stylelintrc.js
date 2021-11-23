/** @type import('stylelint').Configuration */
module.exports = {
  "processors": [
    "stylelint-processor-styled-components"
  ],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-prettier',
    'stylelint-config-recess-order',
    'stylelint-config-styled-component'
  ],
};
