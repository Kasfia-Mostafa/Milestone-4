const userName = 'blackpink';
const userInput = 'blackPink';
console.log(userName.toLowerCase());
console.log(userInput.toUpperCase());
console.log(userName.toLocaleUpperCase());

if( userName.toLowerCase() === userInput.toLowerCase()){
  console.log("Valid user")
}
else{
  console.log("Invalid.use")
}