/* const myInches = 12;
const myFeet = myInches/ 12;
console.log('my feet',myFeet);

const dadaInches = 144;
const dadaFeet = dadaInches / 12;
console.log('dada feet', dadaFeet)

const dadiIncehs = 60;
const dadiFeet = dadiIncehs / 12;
console.log("dadi feet",dadiFeet); */


function inchToFeet(inches){
   const feet = inches / 12;
   return feet;
}

const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);


const nanaInches = 168;
const nanaFeet = inchToFeet(nanaInches);
console.log(nanaFeet);


function milesTokilometer(miles){
  const km = miles*1.609;
  return km;
}

const path = 10;
const run = milesTokilometer(path);
console.log(run)