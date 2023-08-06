const lyrics = 'tumi bondhu kala pakhi ami jeno ki boshonto kale bolte pare ni. kala kala sada';
const lyricsLowerCase = lyrics.toLowerCase();

// const doseExist = lyrics.includes("pakhi");
const searchString = 'Pakhi';
const searchStringLower = searchString.toLowerCase();

// const doseExist = lyricsLowerCase.includes(searchString);
const doseExist = lyricsLowerCase.includes(searchStringLower);

const doseExistOneLine = lyrics.toLowerCase().includes(searchString.toLocaleLowerCase());
// console.log(doseExistOneLine);


// indexOf
console.log(lyrics.indexOf("kala"));
console.log(lyrics.indexOf("tumi"));

if(lyrics.indexOf('sada') != -1){
  console.log("exist")
}else{
  console.log("exist not")
}


// startsWith
console.log(lyrics.startsWith("tumi"));

// endsWith

const fileName ='mydata.pdf';
const otherName ='mypic.png';

console.log(fileName.endsWith(".pdf"));