// a program that takes an array of size N and reverses it.
function reverseArray(array) {
    var reversedArray = [];
    for (var i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}

var array = [1, 2, 3];
console.log(reverseArray(array));