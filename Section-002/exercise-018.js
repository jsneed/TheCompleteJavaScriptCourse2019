var johnScores = [89, 120, 103];
var mikeScores = [116, 94, 123];

function getAverage(arr) {
    var total = 0;
    for(var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}

var johnAvg = getAverage(johnScores);
var mikeAvg = getAverage(mikeScores);
console.log(johnAvg);
console.log(mikeAvg);

if(johnAvg > mikeAvg){
    console.log(`John\'s team wins with an average score of ${johnAvg}`);
} else if (johnAvg === mikeAvg) {
    console.log(`The teams tie with an average score of ${mikeAvg}`);
}else {
    console.log(`Mike\'s team wins with an average score of ${mikeAvg}`);
}


