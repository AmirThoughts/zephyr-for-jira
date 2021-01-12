const Excel = require('exceljs');

module.exports = {
  async transformExcelTableWithRow(fileName, firstRow, lastRow, sheetNameOrNumber) {
    const rows = await this.readDownloadedXLSXFile(fileName, sheetNameOrNumber).then();
    rows.slice(1, firstRow - 1);
    rows.slice(lastRow + 1, rows.length - 1);
    rows.shift();
    const headerRow = rows.shift();
    headerRow.shift();
    return rows.map((row) => {
      const obj = {};
      row.shift();
      row.forEach((item, index) => {
        obj[headerRow[index]] = item;
      });
      return obj;
    });
  },

  async transformExcelTable(fileName, sheetNameOrNumber) {
    const rows = await this.readDownloadedXLSXFile(fileName, sheetNameOrNumber).then();
    rows.shift();
    const headerRow = rows.shift();
    headerRow.shift();
    return rows.map((row) => {
      const obj = {};
      row.shift();
      row.forEach((item, index) => {
        obj[headerRow[index]] = item;
      });
      return obj;
    });
  },

  async writeInXLSXFile(filename, sheetNameOrNumber) {
    const workbook = new Excel.Workbook();
    const book = await workbook.xlsx.writeFile(filename);
    return book.getWorksheet(sheetNameOrNumber);
  },

  async readDownloadedXLSXFile(filename, sheetNameOrNumber) {
    const workbook = new Excel.Workbook();
    const book = await workbook.xlsx.readFile(filename);
    return book.getWorksheet(sheetNameOrNumber).getSheetValues();
  },

  // csv
  async readDownloadedCSVFile(filename, option, sheetNameOrNumber) {
    const workbook = new Excel.Workbook();
    const book = await workbook.csv.readFile(filename, option);
    return book.getWorksheet(sheetNameOrNumber).getSheetValues();
  },

  async writeInCSVFile(filename, option, sheetNameOrNumber) {
    const workbook = new Excel.Workbook();
    const book = await workbook.csv.writeFile(filename, option);
    return book.getWorksheet(sheetNameOrNumber);
  },

  async transformTableFromCSVWithRow(fileName, option, firstRow, lastRow, sheetNameOrNumber) {
    const rows = await this.readDownloadedCSVFile(fileName, option, sheetNameOrNumber).then();
    rows.slice(1, firstRow - 1);
    rows.slice(lastRow + 1, rows.length - 1);
    rows.shift();
    const headerRow = rows.shift();
    headerRow.shift();
    return rows.map((row) => {
      const obj = {};
      row.shift();
      row.forEach((item, index) => {
        obj[headerRow[index]] = item;
      });
      return obj;
    });
  },

  async transformTableFromCSV(fileName, option, sheetNameOrNumber) {
    const rows = await this.readDownloadedCSVFile(fileName, option, sheetNameOrNumber).then();
    rows.shift();
    const headerRow = rows.shift();
    headerRow.shift();
    return rows.map((row) => {
      const obj = {};
      row.shift();
      row.forEach((item, index) => {
        obj[headerRow[index]] = item;
      });
      return obj;
    });
  },
};
