var totalMoney = function(n) {
    let sum = 0;
    let mondayI = 1;
    
    for (let i = 1; i <= n; i++) {
        sum += mondayI;
        
        if (i % 7 === 0) {
            console.log(mondayI)
            mondayI++;
            console.log(mondayI)
        } else {
        
            mondayI++;
           
        }
    }

    return sum;
};
console.log(totalMoney(10))
