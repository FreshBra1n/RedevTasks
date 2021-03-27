change = str => str.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(' ')

let str = 'is2 Thi1s T4est 3a'

console.log(change(str))
