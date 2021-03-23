const fs = require("fs");
const csv = require("csv-parser");

function parseCSV(filename, separator) {
  return new Promise((resolve, reject) => {
    const rows = [];

    fs.createReadStream(filename)
      .pipe(csv({ separator }))
      .on("data", function (row) {
        rows.push([row["Vat Code"], row["Phone Number"]]);
      })
      .on("end", function () {
        resolve(rows);
      });
  });
}

function writeToCSVFile(value, filename) {
  fs.writeFile(filename, value, (err) => {
    if (err) {
      console.log("Error writing to csv file", err);
    } else {
      console.log(`saved as ${filename}`);
    }
  });
}

module.exports = {
  parseCSV,
  writeToCSVFile,
};
