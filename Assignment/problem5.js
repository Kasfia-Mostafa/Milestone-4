function canPay(changeArray,totalDue){

  if(changeArray.length === 0){
    return "Please provide an array.";
     }
  else{
    let sum = 0;
for (let item  of changeArray){
     sum = sum + item;
}
  if(sum > totalDue){
    return true;
  }
  else{
    return false;
   }
  }
}

let money = [];
let price = 10;
let total = canPay(money,price);
console.log(total);
// done
