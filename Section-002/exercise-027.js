var john = {
    name: 'John',
    mass: 200,
    height: 1.5,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};
var mark = {
    name: 'Mark',
    mass: 150,
    height: 1.7,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};
console.log(john.calcBMI());
console.log(mark.calcBMI());
var winner = john.bmi > mark.bmi ? john : mark;
console.log(`${winner.name} has the highest BMI at ${winner.bmi}.`) 
