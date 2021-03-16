let arr=[12,423,54,1235,3,15,2,52]
function sumMin(arr){
let newArray=arr.sort((a,b)=>a-b).slice(0,2).reduce((item,value)=>item+value)
return newArray
}
console.log(sumMin(arr))
