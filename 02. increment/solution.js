function increment(n) {
  return ++n; //++ must be before n due to load order
}

module.exports = { increment };

// Remember to check the expected behaviour of this program first
// Then call the function to check how it is actually working...

// Write some comments down below with your findings...
