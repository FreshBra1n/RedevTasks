//task 3

let str = "4 5 29 54 4 0 -123 666 -64 1 -3 6 -6"

const arr = str.split(' ');
console.log(`Min: ${Math.min(...arr)}, Max: ${Math.max(...arr)}`)
