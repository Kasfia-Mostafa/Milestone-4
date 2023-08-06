function reverseWord(str){
  const words = str.split(' ');
  for(let i = word.length - 1 ; i >= 0 ; i--){
    const element = words[i];
    result.push(element);
  }
  const reversed = result.join(" ");
  return reversed;
}

const myString = "I am a good girl";
reverseWord(myString);