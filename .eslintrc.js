module.exports = {
  extends: ['airbnb'],
  plugins: ['react', 'jsx-a11y', 'import'],
  env: {
    browser: true,
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    // allow jsx syntax in js files (for next.js project)
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], //should add ".ts" if typescript project
  },
};
