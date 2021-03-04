//task 10 

function findNeedle (arr){
    return(`Нашёл иголку по индексу ${arr.findIndex(value=>value=='needle')}`)
}
let arr=["bla","wekmvever","needle","bntyn","qwd","qfverv","rtbrtb"]
console.log(findNeedle(arr))
