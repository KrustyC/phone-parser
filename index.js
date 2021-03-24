const path = require("path");
const { parseCSV, writeToCSVFile } = require("./src/csv");
const { parseNumber } = require("./src/parse-number");

const INPUT_FILENAME = "input.csv";
const OUTPUT_FILENAME = "output.csv";

const CSV_SEPARATOR_INPUT = ";";
const CSV_SEPARATOR_OUTPUT = ",";

const inputFile = path.join(__dirname, "files", INPUT_FILENAME);
const outputFile = path.join(__dirname, "files", OUTPUT_FILENAME);

parseCSV(inputFile, CSV_SEPARATOR_INPUT)
  .then((rows) => {
    const newCsvData = extractAsCSV(rows);
    writeToCSVFile(newCsvData, outputFile);

    console.log("All Done!");
  })
  .catch((error) => {
    console.log("Bad Error Vez", error);
  });

function extractAsCSV(rows) {
  const header = [["Vat Code", "Phone Number"]];
  const newRows = rows.map(([vat, phone]) => {
    return [vat, parseNumber(phone)].join(CSV_SEPARATOR_OUTPUT);
  });

  return header.concat(newRows).join("\n");
}
