const { parseCSV, writeToCSVFile } = require("./csv");
const { parseNumber } = require("./parse-number");

const INPUT_FILENAME = "input.csv";
const OUTPUT_FILENAME = "output.csv";

const CSV_SEPARATOR_INPUT = ";";
const CSV_SEPARATOR_OUTPUT = ",";

const input = [
  ["07978150964", "52496493"],
  ["00163830342", "0426 346588"],
  ["04043240409", "426,346588"],
  ["02736140043", "0426-346588"],
  ["00359020336", "04 26-346588"],
  ["00721440964", "04/26 34 65 88"],
  ["01682040983", "052496493"],
  ["00276050028", "05,2496493"],
  ["00071150148", "39335250457"],
  ["06130661009", "335250457"],
  ["00304350374", "335 250457"],
];

parseCSV(`${__dirname}/files/${INPUT_FILENAME}`, CSV_SEPARATOR_INPUT)
  .then((rows) => {
    const newCsvData = extractAsCSV(rows);
    writeToCSVFile(newCsvData, `${__dirname}/files/${OUTPUT_FILENAME}`);

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
