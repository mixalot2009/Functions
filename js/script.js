//Christofer Mix 2/26/15 Functions Assignment

var number = randomNumber(1,2);
//defining the arguments
function randomNumber(a,b){
    //defining the parameters
    numberGenerator = Math.floor((Math.random() * 100) + b + a);
    //code for generating a random number discovered on W3schools.com
    return numberGenerator;
    //returning code to argument.
}
console.log(number)
