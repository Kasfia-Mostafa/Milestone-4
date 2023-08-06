function add(number1, number2){
   console.log(number1,number2);
   var sum = number1 + number2;
  //  console.log(sum);
   return sum;
}
// add(45,15);

var total = add(80, 20);
// console.log("total",total);

function bringSingara(money){
  var singaraPrice = 10;
  var quality = money / singaraPrice;
  return quality;
}
var myTaka = 150;
var sigaras = bringSingara(myTaka);
console.log("Eating" ,sigaras)