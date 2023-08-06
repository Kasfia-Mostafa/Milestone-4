const lyrics = 'tumi bondhu kala pakhi ami jeno ki. boshonto kale bolte pare ni. kala kala sada';
const part = lyrics.split(' ');
const sentence = lyrics.split('.')
const chars = lyrics.split('') // it will separate each alphabet


// slice and substring is same
const partial = lyrics.slice(5,8);
const partial2 = lyrics.substring(5,8);
// console.log(partial2);

const lines = ['tumi bondhu kala pakhi ami jeno ki',
 'boshonto kale bolte pare ni',
 ' kala kala sada']
 const newSong = lines.join('. ')
 console.log(newSong);