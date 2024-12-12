function findMaximum(array) {
  let maximum = array[0];
  for (let i = 0; i < array.length; i++) {
    if (maximum < array[i]) {
      maximum = array[i];
    }
  }

  return maximum;
}

module.exports = {
  findMaximum,
};
