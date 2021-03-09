function arrayDiff(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] == arr2) {
            delete arr1[i]
        }
    }
    return arr1.filter(Number)
}
let str = [1, 2, 2, 2, 3]
let del = [2]

console.log(arrayDiff(str, del));

