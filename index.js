const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);

// Function to receive a callback function and call it
function receivesAFunction(callback) {
  callback();
}

// Function to return a named function
function returnsANamedFunction() {
  return function namedFunction() {
    
  };
}

// Function to return an anonymous function
function returnsAnAnonymousFunction() {
  return function () {
    
  };
}



