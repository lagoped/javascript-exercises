const fibonacci = function(fibonacciRank) {    
    if(fibonacciRank < 0 || isNaN(fibonacciRank)){
        return 'OOPS';
    }

    if(fibonacciRank == 0) {
        return 0;
    }

    if(fibonacciRank <= 2){
        return 1;
    }

    let oldestSummand = 1;
    let latestSummand = 1;

    for (let i = 2; i < fibonacciRank; i++){
        let newestSummand = oldestSummand + latestSummand;
        oldestSummand = latestSummand;
        latestSummand = newestSummand;
    }

    return latestSummand;
};

// Do not edit below this line
module.exports = fibonacci;
