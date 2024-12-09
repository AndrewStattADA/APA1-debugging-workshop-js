function capitalise(word) {
  return word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase(); // slices the first letter from the word and capitalises it then it adds the slices together making sure the second section is lowercase.
}

console.log(capitalise("bull"));
module.exports = { capitalise };