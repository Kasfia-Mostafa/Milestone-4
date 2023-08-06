function findOddSum(number){
  let sum = 0;
  for(let i = 0 ; i < number.length ; i++){
    const index = i;
    const element = number[index];
    let reminder = element % 2;
       if(reminder === 0){
         continue;
        }
        else{
       sum = sum + element; 
        }
      }
      return sum;
}
const number = [5,7,8,10,45,30];
const result = findOddSum(number);
console.log("Sum of odd numbers:", result);
