function factorial(number){
  let i = number;
  let result = 1;
  while(i >= 1){
    result = result * i;
    console.log(i)
    i--;
  }
  return result;
}

const fact = factorial(5);
console.log("factoria is:",fact);