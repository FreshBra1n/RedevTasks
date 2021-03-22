 countCats=arrays=>newArray = arrays.join(',').split(',').filter(el => el == '^^').length

let arrays = [[0, 1, "^^"], [9, "^^", 2], ["^^", 8, 7]]
console.log(countCats(arrays))
