function factorial(numbers){
  let result = 1;
  for(let i = 1; i <= numbers ; i++){
    result = result * i;
    console.log(i,result);
  }
  return result;
}

const result = factorial(9);
console.log('Factorial is:', result)
