const include = {
  I: './steps_file.js',
  myInfoPage: './src/Support-Code/Pages/MyInfoPage.js',
};

const gherkin = {

  features: './src/features/*.feature',
  steps: ['./src/step_definitions/MyInfoSteps.js'],
};
module.exports = {gherkin,include};
