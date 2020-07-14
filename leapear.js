
function isLeapYear(year){   
    if (year % 4 != 0 ) {
        console.log(year + " is not a leap year! Hey");
    } else if(year % 100 != 0){
        console.log(year + " is a leap year, Wow!");
    } else if(year % 400 != 0){
        console.log(year + " is not a leap year!");
    } else{
        console.log(year + " is a leap year!");
    }
}
isLeapYear(1800);



// let result = 1; 
// for(let i = 4; i >= 1; i--){    
//     result *= i;
// }
// console.log(result);