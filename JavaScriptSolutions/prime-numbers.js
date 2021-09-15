// a function that takes L and R as input and displays the prime numbers between L and R (L and R inclusive)
// can be represented as sum of two consecutive prime numbers + 1
// e.g. L = 3, R = 10, prime numbers are 3, 5, 7, 9
// e.g. L = 10, R = 20, prime numbers are 11, 13, 17, 19
// e.g. L = 20, R = 30, prime numbers are 21, 23, 27, 29
// e.g. L = 30, R = 40, prime numbers are 31, 33, 37, 39

function isPrime(i) {
    // if i is less than 2 or a even number then it is not prime
    if (i < 2 || i % 2 == 0) {
        return false;
    }
    // if i is divisible by 2 then it is not prime
    if (i % 2 == 0) {
        return false;
    }
    // if i is divisible by 3 then it is not prime
    if (i % 3 == 0) {
        return false;
    }
    // if i is divisible by 5 then it is not prime
    if (i % 5 == 0) {
        return false;
    }
    // if i is divisible by 7 then it is not prime
    if (i % 7 == 0) {
        return false;
    }
    // if i is divisible by 11 then it is not prime
    if (i % 11 == 0) {
        return false;
    }
    // if i is divisible by 13 then it is not prime
    if (i % 13 == 0) {
        return false;
    }
    // if i is divisible by 17 then it is not prime
    if (i % 17 == 0) {
        return false;
    }
    // if i is divisible by 19 then it is not prime
    if (i % 19 == 0) {
        return false;
    }

    else if (i % i == 0) {
        return false;
    }
    else {
        return true;
    }
}

function primeNumbers(L, R) {
    var primeNumbers = [];
    var i = L;
    while (i <= R) {
        if (isPrime(i)) {
            primeNumbers.push(i);
        }
        i++;
    }
    return primeNumbers;
}

console.log(primeNumbers(1, 20));

var numbers = primeNumbers(1, 20);
console.log(numbers);

// Write a function that takes L and R as input and displays the prime numbers between L and R (L and R inclusive)
// can be represented as sum of two consecutive prime numbers + 1
// e.g. L = 3, R = 10, prime numbers are 3, 5, 7, 9
// e.g. L = 10, R = 20, prime numbers are 11, 13, 17, 19
// e.g. L = 20, R = 30, prime numbers are 21, 23, 27, 29
// e.g. L = 30, R = 40, prime numbers are 31, 33, 37, 39

function primeNumbers(L, R) {
    var primeNumbers = [];
    var i = L;
    while (i <= R) {
        if (isPrime(i)) {
            primeNumbers.push(i);
        }
        i++;
    }
    return primeNumbers;
}

console.log(primeNumbers(1, 20));

// Write a function that takes L and R as input and displays the prime numbers between L and R (L and R inclusive)
// can be represented as sum of two consecutive prime numbers + 1
// e.g. L = 3, R = 10, prime numbers are 3, 5, 7, 9
// e.g. L = 10, R = 20, prime numbers are 11, 13, 17, 19
// e.g. L = 20, R = 30, prime numbers are 21, 23, 27, 29
// e.g. L = 30, R = 40, prime numbers are 31, 33, 37, 39

function primeNumbers(L, R) {
    var primeNumbers = [];
    var i = L;
    while (i <= R) {
        if (isPrime(i)) {
            primeNumbers.push(i);
        }
        i++;
    }
    return primeNumbers;
}

console.log(primeNumbers(1, 20));

// Write a function that takes L and R as input and displays the prime numbers between L and R (L and R inclusive)
// can be represented as sum of two consecutive prime numbers + 1
// e.g. L = 3, R = 10, prime numbers are 3, 5, 7, 9
// e.g. L = 10, R = 20, prime numbers are 11, 13, 17, 19
// e.g. L =