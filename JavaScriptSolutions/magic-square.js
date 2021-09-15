// a function that takes one integer N and an array of N * N elements.
// the function should give as output of the maximum square array and is a sub-array of the inpputed array.
// the function should return null if no such sub-array exists.
// the function should return null if the input is not an integer.
// the function should return null if the input is not an array.
// the function should return null if the input is not an array of N * N elements.

function magicSquare(n, arr) {
    if (typeof n !== 'number' || n < 1 || n % 1 !== 0) {
        return null;
    }
    if (!Array.isArray(arr) || arr.length !== n * n) {
        return null;
    }
    var sum = n * (n * n + 1) / 2;
    var sumArr = [];
    for (var i = 0; i < n; i++) {
        sumArr.push(0);
        for (var j = 0; j < n; j++) {
            sumArr[i] += arr[i * n + j];
        }
    }
    for (var i = 0; i < n; i++) {
        var sumRow = 0;
        for (var j = 0; j < n; j++) {
            sumRow += arr[j * n + i];
        }
        if (sumRow !== sumArr[i]) {
            return null;
        }
    }
    var sumCol = 0;
    for (var i = 0; i < n; i++) {
        sumCol += arr[i];
    }
    if (sumCol !== sum) {
        return null;
    }
    var sumDiag = 0;
    for (var i = 0; i < n; i++) {
        sumDiag += arr[i * n + i];
    }
    if (sumDiag !== sum) {
        return null;
    }
    var sumDiag2 = 0;
    for (var i = 0; i < n; i++) {
        sumDiag2 += arr[i * n + n - 1 - i];
    }
    if (sumDiag2 !== sum) {
        return null;
    }
    return arr;
}

console.log(magicSquare(3, [23, 40, 9, 26]));