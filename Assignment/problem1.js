function cubeNumber(number) {
  if(typeof number !== "number"){
    return "Please provide a number."
  }
  else{
    result = number**3;
    return result;
    }
}

let cube = cubeNumber(4);
console.log(cube);
// done