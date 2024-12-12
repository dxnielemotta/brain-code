function invertString(string) {
  let newString = [];
  for (let i = string.length - 1; i >= 0; i--) {
    newString.push(string[i]);
  }

  return newString.join("");
}

module.exports = {
  invertString,
};
