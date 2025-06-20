//declaration
//redeclaration
//reassign

var a=10;
var a=20;
a=30;

//declaration
//reassign

let b=20;
// let b=30; // redeclaration not possible
b=50;

//declaration only

const c = 200;

//output 

let word = "Hello world";
console.log(word)


//data types

let num = 21;
console.log(typeof num); //display number as datatype of a

let string1 = "Abhijith"
console.log(typeof string1); //display string as its data type

let apple = null;
console.log(typeof apple);



//operators

//arithmetic operators

let num1 = 10;
let num2 = 20;

console.log(num1+num2); //addition
console.log(num1-num2); //substraction
console.log(num1/num2); //division
console.log(num1*num2); //multiplication
console.log(num1%num2); //modulo operator
console.log(num1**num2); //exponent

//logical operators

let p=true;
let q=false;

console.log(p&&q); //false
console.log(p || q); //true
console.log(p || !q); //true
console.log(p && !q); //true

//comparison operators and conditional statements

let mark=15;

//if else,greater than or equal to operator

if(mark>=55){                     
    console.log("Passed");
}                                  
else{
    console.log("failed")
}

if(mark>=75){
    console.log("passed");
}else if(mark>=55 && mark<=75){
    console.log("Okay need improvement");
}else if(mark>=35 && mark <=55){
    console.log("passed");
}else{
    console.log("Failed")
}

//switch

let day=5;
switch(day){
    case 1:console.log("Monday");
    break;
    case 2:console.log("Tuesday");
    break;
    case 3:console.log("wednesday");
    break;
    case 4:console.log("thursday");
    break;
    case 5:console.log("fridayday");
    break;
    case 6:console.log("saturday");
    break;
    case 7:console.log("sunday");
    break;
   default:console.log("Invalid entry");
}

//type conversion to string

let number = 23;
let numberChange=number.toString();
console.log(numberChange)
console.log(typeof numberChange)

//type conversion to number

let number2 = "230";
let numberChange2=parseInt(number2);
console.log(numberChange2)
console.log(typeof numberChange2)

