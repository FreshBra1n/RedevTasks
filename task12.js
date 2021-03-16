function arrayDiff(arr1, arr2) {
  return newArray=arr1.filter(function(x){return !arr2.includes(x)})
}
let arr = [1, 2, 2, 2, 3]
let del = [2]

console.log(arrayDiff(arr, del));
