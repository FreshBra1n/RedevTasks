// task 6

function error_printer(s) {
    return (s.match(/[^a - m]/g).length || 0) + '/' + s.length
}
let s = 'abczyw'
console.log(error_printer(s))
