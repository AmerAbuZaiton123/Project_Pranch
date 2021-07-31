function sum(a, b) { //eslint-disable-line
    let total = a + b;
    return [total,  `The sum of ${a} and ${b} is ${total}.`];
  }
  
  
  function  multiply(a,b){ //eslint-disable-line
    let multiplyNumber =a * b
  
  return [multiplyNumber,`The product of ${a} and ${b} is ${multiplyNumber}.`]
  }
  
  
  
  function sumAndMultiply(a,b,c) 
  {
    let sum1 =a+b+c ;
    let multiply=(a*b)*c;
     return  [ sum1,multiply,`${a} and ${b} and ${c} sum to ${sum1}.` , `The product of ${a} and ${b} and ${c} is ${multiply}.`] ;
   
  }
  
  testSumAndMultiply(4,7,5);
  
  testMultiply(5,9);
  
  testSum(4, 7); 