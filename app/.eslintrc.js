module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    ...
    // React scope no longer necessary with new JSX transform
    'react/react-in-jsx-scope': 'off',
    // Allow .js files to use JSX syntax
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.tsx', '.jsx'] }],
    ...
  },
};
