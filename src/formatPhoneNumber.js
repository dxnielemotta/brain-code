function formatPhoneNumber(telNumber) {
  if (telNumber.length !== 11) {
    return "Array com tamanho incorreto.";
  }

  for (let i = 0; i < telNumber.length; i++) {
    if (telNumber[i] < 0 || telNumber[i] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }

    let count = 0;
    for (let j = 0; j < telNumber.length; j++) {
      if (telNumber[i] === telNumber[j]) {
        count++;
      }
      if (count >= 3) {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
  }
  let result = `(${telNumber[0]}${telNumber[1]}) ${telNumber[2]}${telNumber[3]}${telNumber[4]}${telNumber[5]}${telNumber[6]}-${telNumber[7]}${telNumber[8]}${telNumber[9]}${telNumber[10]}`;
  return result;
}

module.exports = {
  formatPhoneNumber,
};
