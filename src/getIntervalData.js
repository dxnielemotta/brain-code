function getIntervalData(array, inicio, fim) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] >= inicio && array[i] <= fim) {
      newArray.push(array[i]);
    }
  }

  return {
    arrayNoIntervalo: newArray,
    contador: newArray.length,
  };
}

module.exports = {
  getIntervalData,
};
