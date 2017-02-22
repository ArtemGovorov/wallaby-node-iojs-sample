module.exports = function () {
  return {
    files: [
      'lib/**/*.js'
    ],

    tests: [
      'test/**/*Spec.js'
    ],

    env: {
      type: 'node',
      runer: 'node'
    },

    bootstrap: function (w) {
      const mocha = w.testFramework;
      mocha.grep('@slow').invert();

      global.expect = require('chai').expect;
    }
  };
};
