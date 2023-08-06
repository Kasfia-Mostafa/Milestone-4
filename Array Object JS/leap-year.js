/* function isLeapYear(year){
   const reminder = year % 4;
   if(reminder === 0){
    // console.log("Your is leap year", year)
    return true;
   }
   else{
    // console.log("Your is not leap year" ,year);
    return false;
   }
} */
function isLeapYear(year){
   const reminder = year % 4;
   if(reminder === 0){
    // console.log("Your is leap year", year)
    return true;
   }
   
   return false;
    // console.log("Your is not leap year" ,year);
   
}

const isMyYear = isLeapYear(1933);
console.log('My year', isMyYear)
const isHerYear = isLeapYear(1960);
console.log('Her year', isHerYear)

