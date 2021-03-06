exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    CustomHelper: {
      require: './customHelper.js',
    },
  },
  include: {
    I: './steps_file.js',
    classpage: './pages/classpage.js',
    classnestedpage: './pages/classnestedpage.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'pageobject-as-class',
};
