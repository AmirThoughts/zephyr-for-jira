let Helper = codecept_helper;

class MyHelper extends Helper {

  async isVisible(textOrLocator, timeout) {
    const helper = this.helpers[('Protractor' in this.helpers) ? 'Protractor' : 'Protractor'];
    try {
      await helper.waitForVisible(textOrLocator, timeout);
      return true;
    } catch (err) {
      return false;
    }
  }

  async isEnable(textOrLocator, timeout) {
    const helper = this.helpers[('Protractor' in this.helpers) ? 'Protractor' : 'Protractor'];
    try {
      await helper.waitForEnabled(textOrLocator, timeout);
      return true;
    } catch (err) {
      return false;
    }
  }

  async isPresent(textOrLocator, timeout) {
    const helper = this.helpers[('Protractor' in this.helpers) ? 'Protractor' : 'Protractor'];
    try {
      await helper.waitForElement(textOrLocator, timeout);
      return true;
    } catch (err) {
      return false;
    }
  }

  async isTextPresent(text, timeout) {
    const helper = this.helpers[('Puppeteer' in this.helpers) ? 'Puppeteer' : 'Protractor'];
    try {
      await helper.waitForText(text, timeout);
      return true;
    } catch (err) {
      return false;
    }
  }
}
module.exports = MyHelper;
