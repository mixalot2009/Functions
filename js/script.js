//Christofer Mix 2/26/15 Functions Assignment

randomNumber(1,2);

function randomNumber(a,b){
    numberGenerator = Math.floor((Math.random() * 100) + b + a);
    console.log(numberGenerator)
}