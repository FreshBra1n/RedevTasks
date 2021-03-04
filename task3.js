//task 3

function list (str){
    let newStr=str.split(' ');
    return (`Min: ${Math.min(...newStr)}, Max: ${Math.max(...newStr)}`)
}
let str = "4 5 29 54 4 0 -123 666 -64 1 -3 6 -6"

console.log(list(str))
