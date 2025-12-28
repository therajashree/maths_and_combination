
function factorsOfNumber(n) {
    let divisors = [];
    for(let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if(n / i === i) {
                divisors.push(i);
            } else {
                divisors.push(i);
                divisors.push(n / i);
            }
        }
    }

    return divisors;
}

console.log(factorsOfNumber(10)); // [ 1, 10, 2, 5 ]

// node factors.js