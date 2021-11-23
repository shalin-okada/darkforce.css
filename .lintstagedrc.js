module.exports = {
  '*.tsx, *.ts': ['yarn eslint --max-warnings 0 --fix', 'yarn prettier -cw --write'],
  '*.scss': ['yarn stylelint --max-warnings 0 --fix'],
};
