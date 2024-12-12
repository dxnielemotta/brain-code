function printInnerElements(array) {
  if (array.length < 3) {
    console.log("Tamanho do array inválido");
  } else {
    array.pop();
    array.shift();

    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }
}

printInnerElements([2, 3, 7, 8]);

module.exports = {
  printInnerElements,
};
