let arr1 = [1, [2, [3, [4]]]];

let arr2 = [1, [2], [3, [[4]]], [5, 6]];

const expand = arr => arr.flat(Infinity)

console.log(expand(arr1))
