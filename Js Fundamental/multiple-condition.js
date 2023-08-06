// var isGraduated = true;
// var salary = 70000;
// var car = 1;
// if(isGraduated == true){
//   console.log("Lets have fun");
// }
// else{
//   console.log("can not play");
// }


// if(isGraduated == true && salary > 50000){
//   console.log("Lets have fun");
// }
// else{
//   console.log("can not play");
// }
// if(isGraduated == true && salary > 50000 && car >=1 ){ 
//   console.log("Lets have fun");
// }
// else{
//   console.log("can not play");
// }

var isGraduated = true;
var salary = 70000;
var car = 0;

if(isGraduated === true || salary > 50000 || car >= 1)
{
  // console.log("Lets have fun");
}
else{
    // console.log("can not play");
  }



  if(isGraduated === true && (salary > 50000 || car >= 1))
  {
    console.log("Lets have fun");
  }
  else
  {
      console.log("can not play");
  }