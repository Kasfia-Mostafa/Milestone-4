function maxInArray(number){
  let largest = number[0]
  for(let i = 0; i < number.length ; i++){
    const index = 1;
    const element = number[i];
    if( element > largest){
      largest = element;
    }
  }
  return largest;
}

const height = [167, 190, 120, 165, 137, 265];
const tallest = maxInArray(height);
console.log("Tallest person:", tallest);