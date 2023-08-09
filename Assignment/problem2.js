function matchFinder(string1, string2){
  if(string1.includes(string2)){
    return true;
  }
  else{
    return false;
  }
}

let line1 = "Peter Parker";
let line2 = "Pen";
let same = matchFinder(line1,line2);
console.log(same);
// done