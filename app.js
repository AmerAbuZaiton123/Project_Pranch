'use strict';
function sum(a, b) { //eslint-disable-line
  let total = a + b;
  return [total,  `The sum of ${a} and ${b} is ${total}.`];
}

testSum(4, 7);

function  multiply(a,b){ //eslint-disable-line
    let multiplyNumber =a * b
  
  return [multiplyNumber,`The product of ${a} and ${b} is ${multiplyNumber}.`]
  }
  
  
  
  testMultiply(5,9);
