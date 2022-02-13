const ActionHelper = require('./../helpers/actionHelpers');
require('chai').should();

class LoginPage {

    launchApp() {
        ActionHelper.launchApp();
        ActionHelper.pause(2);
    }

   verifyLabel(){
        ActionHelper.getText('~Test APP').should.equals('Test APP')
   }

    login(){
        ActionHelper.waitForElement('~Login',3)
        ActionHelper.click('~Login')

    }

}

module.exports = LoginPage;
