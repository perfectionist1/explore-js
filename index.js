console.log(7);
 console.log("Hello Guys, Good Morning!");

 var bananaPrice = 12;
 console.log(bananaPrice);
 console.log(typeof bananaPrice);

var promise = "Hey man, how are you there in England?";

console.log(promise.indexOf("England"));
console.log(promise.split(" "));

//convert into number as float
var number1 = 2;
var number2 = '10.5';
//number2 = parseFloat(number2);
//console.log(number1 + number2);

//to convert into a full digit
//console.log(parseInt(number2));
number2 = +number2;
//console.log(+number2);

//Empty String and convert a number into a string
var num = ''; // there is no space
var abc = 20;
console.log(typeof(abc));
console.log(typeof(''+abc));

//fraction maths
var a = 0.3;
var b = 0.2;
var c = a + b;
console.log(c.toFixed(3));

// Absolute number.
var x = -10;
var absoluteNumber = Math.abs(x);
console.log(absoluteNumber);

//Round Figure
    //Minimum auto rounded Number if under 0.5
var y = 5.45;
var result = Math.round(y);
console.log(result);
    // auto Maximum rounded Number if crossed .5
var h = 5.545;
var res = Math.round(h);
console.log(res);

//Ceiling Figure - always converts any fraction number to a maximum rounded figure.
    var z = 8.2390;
    var r = Math.ceil(z);
    console.log(r);

//Floor Figure- always converts any fraction number into a minimum roundd figure.
    var i = 8.559;
    var r = Math.floor(i);
    console.log(r);

//random number
var number = Math.random() * 100;
var result = Math.round(number);
console.log("The selected Student ID is: "+result);

var friendsAge = [16, 21, 34];
console.log(typeof friendsAge);
console.log(friendsAge.length);

var i = 1;

while(i < 8){
    console.log(i);
    i++;
}

var nums = [11, 34, 23, 20, 20 ];

for(var i = 0; i < nums.length; i++){
    console.log( "The Looped number is: " + nums[i]);
}











