const fs = require('fs');

const path = require('path');

const I = actor();
const tokenID = path.join(__dirname, '../output/admin_session.json');

module.exports = {

  transformTable(table) {
    const { rows } = table;
    const headerRow = rows.shift();
    const headers = headerRow.cells.map((item) => item.value);

    return rows.map((row) => {
      const obj = {};
      row.cells.forEach((item, index) => {
        obj[headers[index]] = item.value;
      });
      return obj;
    });
  },

  removeDirectory(dir) {
    const list = fs.readdirSync(dir);
    for (let i = 0; i < list.length; i++) {
      const filename = path.join(dir, list[i]);
      const stat = fs.statSync(filename);
      if (filename === '.' || filename === '..') {
      } else if (stat.isDirectory()) {
        fs.rmdir(filename);
      } else {
        fs.unlinkSync(filename);
      }
    }
    fs.rmdirSync(dir);
  },

  replaceAll(str, term, replacement) {
    return str.replace(new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replacement);
  },

  waitAndClick(locator, sec) {
    I.waitForVisible(locator, sec);
    I.waitForEnabled(locator, sec);
    I.click(locator);
  },

  waitAndSee(locator, sec) {
    I.waitForVisible(locator, sec);
    I.retry(3).seeElement(locator);
  },

  waitAndFillField(locator, text, sec) {
    I.waitForVisible(locator, sec);
    I.fillField(locator, text);
  },

  clearFields(locator, sec) {
    I.waitForVisible(locator, sec);
    I.click(locator);
    I.pressKey(['\uE009', 'a', '\uE009']);
    I.pressKey('Backspace');
  },

  waitAndAssertText(text, locator, sec) {
    I.waitForVisible(locator, sec);
    I.seeTextEquals(text, locator);
  },

  async waitAndGetTextFromAttribute(attribute, locator, sec) {
    I.waitForVisible(locator, sec);
    return await I.grabAttributeFrom(locator, attribute);
  },

  async waitAndGetTextFromLocator(locator, sec) {
    I.waitForVisible(locator, sec);
    return await I.grabTextFrom(locator);
  },

  async getOktaToken() {
    let token = await I.executeScript(
      (storage) => localStorage.getItem(storage), 'okta-token-storage');
    token = JSON.stringify(token);
    token = JSON.parse(JSON.parse(token));
    return `Bearer ${token.accessToken.accessToken}`;
  },

  async getNavigationOpen() {
    let navigationOpen = await I.executeScript(
      (storage) => localStorage.getItem(storage), 'navigation_open');
    navigationOpen = JSON.stringify(navigationOpen);
    navigationOpen = JSON.parse(JSON.parse(navigationOpen));

    return navigationOpen;
  },

  async getIDToken() {
    let token = await I.executeScript(
      (storage) => localStorage.getItem(storage), 'okta-token-storage');
    token = JSON.stringify(token);
    token = JSON.parse(JSON.parse(token));
    return `${token.idToken.claims.email}`;
  },

  async getLocale() {
    let locale = await I.executeScript(
      (storage) => sessionStorage.getItem(storage), 'locale');
    return locale;
  },

};
