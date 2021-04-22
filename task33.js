// function toLower(str) {
//     return str.toLowerCase()
// }

// function comparison(str1, str2) {
//     str1 = toLower(str1)
//     str2 = toLower(str2)
//     if (str1 == str2) {
//         return true
//     } else {
//         return false
//     }
// };

// console.log(comparison('string', 'StRiNg'))

const comparison=(str1, str2)=> (str1.toLowerCase()==str2.toLowerCase())

console.log(comparison('string', 'StRiNg'))
