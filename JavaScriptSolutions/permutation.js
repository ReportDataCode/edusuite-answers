//  function that takes two 11 integer array elements and gives output YES, if there's a permutation of the first array that is equal to the second array or gives output No, if there's no such permutation.

function arePermutations(arr1, arr2) {

    if (arr1.length != arr2.length) {
        return "NO";
    }

    let hM = new Map();

    for (let i = 0; i < arr1.length; i++) {
        let x = arr1[i];
        if (!hM.has(x)) {
            hM.set(x, 1);
        }
        else {
            let k = hM[x];
            hM.set(x, k + 1);

        }
    }

    for (let i = 0; i < arr2.length; i++) {
        let x = arr2[i];
        if (!hM.has(x) | hM[x] == 0) {
            return "NO";
        }
        let k = hM[x];
        hM.set(x, k - 1);


    }
    return true;

}

let arr1 = [0];
let arr2 = [3, 2, 2, 4];
if (arePermutations(arr1, arr2)) {
    console.log("YES");
}
else {
    console.log("NO");
}

