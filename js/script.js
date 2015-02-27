//Christofer Mix 2/26/15 Functions Assignment

var number = randomNumber(1,2);
//defining the arguements
function randomNumber(a,b){
    //defining the peramiters
    numberGenerator = Math.floor((Math.random() * 100) + b + a);
    //code for generating a random number discovered on W3schools.com
    return numberGenerator;
}