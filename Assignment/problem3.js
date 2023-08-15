function sortMaker(arr){

  for(let i = 0; i < arr.length ; i++){
    let value = arr[i];
    if(value < 0){
      return "Invalid Input"
    }  
  }
  if(arr[0] === arr[1]){
    return "Equal";
  }
  else if(arr[0] > arr[1]){
    
    return arr;
  }
  else{
    return [arr[1],arr[0]]; 
  }
}

let array = [2,3];
let arrayCall = sortMaker(array);
console.log(arrayCall);
// done

