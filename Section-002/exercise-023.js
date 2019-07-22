function tipCalc(billAmount) {
    if(billAmount < 50) {
        return billAmount * .2;
    }
    else if(billAmount < 200) {
        return billAmount * .15;
    }
    else {
        return billAmount * .1;
    }
}

var billArray = [124.00, 48.00, 268.00];
var tipArray = [];
var finalBillArray = [];
for(var i = 0; i < billArray.length; i++)
{
    var tip = tipCalc(billArray[i]);
    tipArray[i] = tip;
    finalBillArray[i] = billArray[i] + tip;
}
console.log('Tips ' + tipArray);
console.log('Final Bill: ' + finalBillArray);