function isEven(number){
  const reminder = number % 2;
  // console.log(reminder);
  if(reminder === 0){
    console.log("number is even");
    return true;
  }
  else{
    // console.log("Number is odd");
    return false;
  }
}

const myNumber = isEven(303);
console.log(myNumber);
const herNumber = isEven(46);
console.log(herNumber);