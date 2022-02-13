const {Then, Given} = require("cucumber");
const LoginPage = require('./../pages/login.page')
const loginPage = new LoginPage();


Given(/^I launch the  app of iPad$/, function () {
    loginPage.launchApp()
});
Then(/^I should see the  label$/, function () {
    loginPage.verifyLabel()
});

Then(/^I can click login button$/, function () {
    loginPage.login()

});

Then(/^I can select namespace$/, function () {

});