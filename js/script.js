//Christofer Mix 2/26/15 Functions Assignment

var number = randomNumber(1,2);
//defining the arguments
var number2 = randomNumber2(1,3);
//defining the arguments
var number3 = randomNumber2(1,4);
//defining the arguments
var number4 = randomNumber2(1,5);
//defining the arguments
var number5 = randomNumber2(1,6);
//defining the arguments
function randomNumber(a,b){
    //defining the parameters
    numberGenerator = Math.floor((Math.random() * 100) + b + a);
    //code for generating a random number discovered on W3schools.com
    return numberGenerator;
    //returning code to argument.
}
function randomNumber2(a,b){
    //defining the parameters
    numberGenerator = Math.floor((Math.random() * 100) + b + a);
    //code for generating a random number discovered on W3schools.com
    return numberGenerator;
    //returning code to argument.
}
function randomNumber3(a,b){
    //defining the parameters
    numberGenerator = Math.floor((Math.random() * 100) + b + a);
    //code for generating a random number discovered on W3schools.com
    return numberGenerator;
    //returning code to argument.
}
function randomNumber4(a,b){
    //defining the parameters
    numberGenerator = Math.floor((Math.random() * 100) + b + a);
    //code for generating a random number discovered on W3schools.com
    return numberGenerator;
    //returning code to argument.
}
function randomNumber5(a,b){
    //defining the parameters
    numberGenerator = Math.floor((Math.random() * 100) + b + a);
    //code for generating a random number discovered on W3schools.com
    return numberGenerator;
    //returning code to argument.
}
console.log("Your lucky number 1 is " + number + "!")
//output for function 1
console.log("Your lucky number 1 is " + number2 + "!")
//output for function 2
console.log("Your lucky number 1 is " + number3 + "!")
//output for function 3
console.log("Your lucky number 1 is " + number4 + "!")
//output for function 4
console.log("Your lucky number 1 is " + number5 + "!")
//output for function 5
