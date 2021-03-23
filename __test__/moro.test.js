const { parseNumber } = require("../parse-number");

describe("should work", () => {
  const table = [
    ["390473272900", "+390473272900"],
    ["39047327290", "+39047327290"],

    ["52496493", "+39052496493"],
    ["0426 346588", "+390426346588"],
    ["426,346588", "+390426346588"],
    ["0426-346588", "+390426346588"],
    ["04 26-346588", "+390426346588"],
    ["04/26 34 65 88", "+390426346588"],
    ["052496493", "+39052496493"],
    ["05,2496493", "+39052496493"],

    ["390335250457", "+390335250457"],
    ["39 335250457", "+39335250457"],
    ["39 3352504522", "+393352504522"],
    ["39 33525045722", "+3933525045722"],
    ["333 525045722", "+39333525045722"],
    ["39335250457123", null],
  ];

  it.each(table)("parse the number", (initial, expected) => {
    const result = parseNumber(initial);

    expect(result).toEqual(expected);
  });
});