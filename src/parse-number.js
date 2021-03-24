function parseNumber(number) {
  const cleanNumber = number.replace(/[^\w]/gi, "");

  if (cleanNumber.length > 13) {
    console.log("Numero > 13:", cleanNumber);
    return null;
  }

  if (cleanNumber.startsWith("0")) {
    return `+39${cleanNumber}`;
  }

  if (
    !cleanNumber.startsWith("3") ||
    (cleanNumber.startsWith("3") && cleanNumber.length < 9)
  ) {
    return `+390${cleanNumber}`;
  }

  // Da qui in poi restano solo quelli che iniziano col 3 e sono lunghi tra 9 e 13 (inclusi)
  if (
    cleanNumber.startsWith("390") ||
    (cleanNumber.startsWith("39") && cleanNumber.length > 10)
  ) {
    return `+${cleanNumber}`;
  }

  // Da qui in poi restano solo quelli che non iniziano col 390 e non iniiziano con 39 e sono lunghi piu di 10

  return `+39${cleanNumber}`;
}

module.exports = {
  parseNumber,
};
