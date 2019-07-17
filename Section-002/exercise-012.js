// BMI = mass / height^2 = mass / (height * height)
// mass in kg and height in meters
function getBMI(mass, height) {
    return mass / (height * height);
}
var massMark = 200;
var heightMark = 1.2;
var massJohn = 150;
var heightJohn = 1.4;

var bmiMark = getBMI(massMark, heightMark);
var bmiJohn = getBMI(massJohn, heightJohn);
var higher = bmiMark > bmiJohn;
console.log("Is Mark's BMI higher than John's? " + higher);
