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

    [arr[0],arr[1]] = [arr[1],arr[0]];
    return [arr[0],arr[1]];
     
  }
  else{
    return arr;
  }
}

let array = [-4,3];
let arrayCall = sortMaker(array);
console.log(arrayCall);
// done

