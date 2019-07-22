var john = {
    bills: [124.00, 48.00, 268.00, 180.00, 42.00],
    calcTip: function() {
        var tips = [];
        var finalBills = [];
        for(var i = 0; i < this.bills.length; i++) {
            var percent = 0.0
            if(this.bills[i] < 50) percent = .2;
            else if(this.bills[i] < 200) percent = .15;
            else percent = .1;

            tips[i] = this.bills[i] * percent;
            finalBills[i] = this.bills[i] + tips[i];
        }
        this.tips = tips;
        this.finalBills = finalBills;
    }
}

john.calcTip();
console.log(john);

var mark = {
    bills: [77.00, 475.00, 110.00, 45.00],
    calcTip: function() {
        var tips = [];
        var finalBills = [];
        for(var i = 0; i < this.bills.length; i++) {
            var percent = 0.0
            if(this.bills[i] < 100) percent = .2;
            else if(this.bills[i] < 300) percent = .1;
            else percent = .25;

            tips[i] = this.bills[i] * percent;
            finalBills[i] = this.bills[i] + tips[i];
        }
        this.tips = tips;
        this.finalBills = finalBills;
    }
}

mark.calcTip();
console.log(mark);

function tipAverage(tips) {
    var tot = 0;
    for(var i = 0; i < tips.length; i++){
        tot += tips[i];
    }
    return tot / tips.length;
}
var johnAvg = tipAverage(john.tips);
var markAvg = tipAverage(mark.tips);

if(johnAvg > markAvg) console.log('John\'s family paid the highest average in tips.');
else if(markAvg > johnAvg) console.log('Mark\'s family paid the highest average in tips at ' + markAvg);
else console.log('Both families paid the same average in tips.');