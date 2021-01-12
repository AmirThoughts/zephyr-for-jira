const { I } = inject();

module.exports = {

    fields: {

    },


    navigateToApplication(url){
        I.amOnPage(url);
    },

    loginToTheApplication(username, password){
        I.waitForVisible(`#txtUsername`, 50);
        I.fillField(`#txtUsername`, username);
        I.fillField(`#txtPassword`, password);
        I.click(`#btnLogin`);
    },

    verifySuccessfulLogin() {
        I.waitInUrl(`dashboard`, 50);
        I.waitForVisible(`#welcome`, 50);
        I.seeElement(`#welcome`);
    },

    clickOnMyInfoLink(){
        I.waitForVisible(`#menu_pim_viewMyDetails`, 50);
        I.click(`#menu_pim_viewMyDetails`);
    },

    verifyPersonalDetails(){
        I.waitForVisible(`//h1[text()='Personal Details']`, 50);
        I.seeElement(`//h1[text()='Personal Details']`);
    },

    verifyCustomFields(){
        I.waitForVisible(`//h1[text()='Custom Fields']`, 50);
        I.scrollTo(`//h1[text()='Custom Fields']`);
        I.seeElement(`//h1[text()='Custom Fields']`);
    },

    verifyAttachments(){
        I.waitForVisible(`//h1[text()='Attachments']`, 50);
        I.scrollTo(`//h1[text()='Attachments']`);
        I.seeElement(`//h1[text()='Attachments']`);
    },

    logoutFromTheApplication(){
        I.waitForVisible(`#welcome`, 50);
        I.click(`#welcome`);
        I.waitForVisible(`//a[text()='Logout']`, 50);
        I.click(`//a[text()='Logout']`);
    }










};


