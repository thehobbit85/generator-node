'use strict';

module.exports = {
  app: require.resolve('./generators/app'),
  boilerplate: require.resolve('./generators/boilerplate'),
  editorconfig: require.resolve('./generators/editorconfig'),
  git: require.resolve('./generators/git'),
  gulp: require.resolve('./generators/gulp'),
  readme: require.resolve('./generators/readme'),
  travis: require.resolve('./generators/travis')
};
