module.exports = {
  'extends': 'airbnb',
  'env': {
    'browser': true,
  },
  'rules': {
    'no-multiple-empty-lines': 'off',

    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': [1, { 'forbid': ['any'] }],
    'react/style-prop-object': 'off',
    'react/jsx-boolean-value': 'off',
    'no-param-reassign': [1, { 'props': false }],
  },
};
