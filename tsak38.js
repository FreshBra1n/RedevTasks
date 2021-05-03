let array1 = [1, 2, 3, 4, 5];

let array2 = [4, 5, 6];

const func=(arr1,arr2)=>arr1.reduce((acc, curr, i) => acc.concat(arr2[i] + curr || curr),[] )

console.log(func(array1,array2))
