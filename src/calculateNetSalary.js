function calculateNetSalary(grossSalary) {
  let inssAmount;
  if (grossSalary <= 1556.94) {
    inssAmount = grossSalary * (8 / 100);
  } else if (grossSalary <= 2594.92) {
    inssAmount = grossSalary * (9 / 100);
  } else if (grossSalary <= 5189.82) {
    inssAmount = grossSalary * (11 / 100);
  } else {
    inssAmount = 570.88;
  }

  const baseSalary = grossSalary - inssAmount;

  let irAmount = 0;

  if (baseSalary >= 1903.99 && baseSalary <= 2826.65) {
    irAmount = baseSalary * (7.5 / 100) - 142.8;
  } else if (baseSalary > 2826.65 && baseSalary <= 3751.05) {
    irAmount = baseSalary * (15 / 100) - 354.8;
  } else if (baseSalary > 3751.05 && baseSalary <= 4664.68) {
    irAmount = baseSalary * (22.5 / 100) - 636.13;
  } else if (baseSalary > 4664.68) {
    irAmount = baseSalary * (27.5 / 100) - 869.36;
  }

  const liquidSalary = baseSalary - irAmount;
  return `Salário: R$ ${liquidSalary}`;
}

module.exports = {
  calculateNetSalary,
};
