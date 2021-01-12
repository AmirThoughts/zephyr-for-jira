const { I } = inject();
const myInfoPage = require('../../../codecept-tests/Support-Code/Pages/MyInfoPage');

Given(/^I am on the login page$/, async function() {
    myInfoPage.navigateToApplication("https://opensource-demo.orangehrmlive.com/");
});
When(/^I login to the application$/, function () {
    myInfoPage.loginToTheApplication("Admin", "admin123");
});
Then(/^I verify successful login$/, function () {
    myInfoPage.verifySuccessfulLogin()
});
When(/^I click on the my info link$/, function () {
    myInfoPage.clickOnMyInfoLink();
});
Then(/^I verify the personal details section$/, function () {
    myInfoPage.verifyPersonalDetails();
});
Then(/^I verify the custom fields section$/, function () {
    myInfoPage.verifyCustomFields();
});
Then(/^I verify the attachments section$/, function () {
    myInfoPage.verifyAttachments();
});
Then(/^I logout from the application$/, function () {
    myInfoPage.logoutFromTheApplication();
});