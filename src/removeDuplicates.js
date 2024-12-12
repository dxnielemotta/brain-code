function removeDuplicates(array) {
  let uniqueNumbers = [];
  for (let i = 0; i < array.length; i++) {
    if (!uniqueNumbers.includes(array[i])) {
      uniqueNumbers.push(array[i]);
    }
  }

  return uniqueNumbers;
}

module.exports = {
  removeDuplicates,
};
