function capitalise(word) {
  return word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase();
}

console.log(capitalise("bull"));
module.exports = { capitalise };