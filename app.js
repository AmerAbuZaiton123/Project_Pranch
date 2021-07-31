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
  
  
  function sumArray(sumArr)
  {  let sum=0
    for (let i = 0; i < sumArr.length; i++) {
      sum += sumArr[i];
  }
   return[sum,`${sumArr[0]},${sumArr[1]},${sumArr[2]} was passed in as an array of numbers, and ${sum} is their sum.`]
  }
  
  let testArray = [2, 3, 4];
  testSumArray(testArray)
  testSumAndMultiply(4,7,5);
  
  testMultiply(5,9);
  
  testSum(4, 7); 
  