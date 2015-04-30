Package.describe({
  name: 'stolinski:postcss',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'PostCSS can do the same work as preprocessors like Sass, Less, and Stylus. But PostCSS is modular, 3-30 times faster, and much more powerful.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('postcss.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('stolinski:postcss');
  api.addFiles('postcss-tests.js');
});
