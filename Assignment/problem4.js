function findAddress(obj){
  let street = obj.street || "__";
  let house = obj.house || "__";
  let society = obj.society || "__";
  
  return street + ',' + house + ',' + society;
}

let address ={
  street:10,
  house:'15A',
  society:'Earth Perfect'
}
let location = findAddress(address);
console.log(location);
// done
