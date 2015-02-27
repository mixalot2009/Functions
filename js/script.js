//Christofer Mix 2/26/15 Functions Assignment
var wantNumbers = confirm("Would you like your lucky numbers for today?");
//asking if person want there lucky numbers
var number = randomNumber(1,2);
//defining the arguments
var number2 = randomNumber2(1,3);
//defining the arguments
var number3 = randomNumber3(1,4);
//defining the arguments
var number4 = randomNumber4(1,5);
//defining the arguments
var number5 = randomNumber5(1,6);
//defining the arguments
if(wantNumbers) {
    function randomNumber(a, b) {
        //defining the parameters
        numberGenerator = Math.floor((Math.random() * 100) + b + a);
        //code for generating a random number discovered on W3schools.com
        return numberGenerator;
        //returning code to argument.
    }

    function randomNumber2(a, b) {
        //defining the parameters
        numberGenerator = Math.floor((Math.random() * 100) + b + a);
        //code for generating a random number discovered on W3schools.com
        return numberGenerator;
        //returning code to argument.
    }

    function randomNumber3(a, b) {
        //defining the parameters
        numberGenerator = Math.floor((Math.random() * 100) + b + a);
        //code for generating a random number discovered on W3schools.com
        return numberGenerator;
        //returning code to argument.
    }

    function randomNumber4(a, b) {
        //defining the parameters
        numberGenerator = Math.floor((Math.random() * 100) + b + a);
        //code for generating a random number discovered on W3schools.com
        return numberGenerator;
        //returning code to argument.
    }

    function randomNumber5(a, b) {
        //defining the parameters
        numberGenerator = Math.floor((Math.random() * 100) + b + a);
        //code for generating a random number discovered on W3schools.com
        return numberGenerator;
        //returning code to argument.
    }
    console.log("Your 1st lucky is " + number + "!")
//output for function 1
    console.log("Your 2nd lucky is " + number2 + "!")
//output for function 2
    console.log("Your 3rd lucky is " + number3 + "!")
//output for function 3
    console.log("Your 4th lucky is " + number4 + "!")
//output for function 4
    console.log("Your 5th lucky is " + number5 + "!")
//output for function 5
    alert("Your lucky numbers are " + number + ", " + number2 + ", " + number3 + ", " + number4 + ", and " + number5 + "!")
//alerting person to lucky numbers
}else{
    console.log("Sorry you didn't want your lucky numbers.")
    //output if answer to initial question was no
    alert("Sorry you didn't want your lucky numbers.")
    //alerting person they did not want there lucky numbers
}
