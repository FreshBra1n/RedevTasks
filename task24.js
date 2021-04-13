// let str = 'tasks JavaScript'
// function isUpperCase(str, character) {
//     if (str[character].replace(/\A-Z/)==str[character].toUpperCase()) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isUpperCase(str,6))

let str = 'tasks JavaScript'
 isUpperCase=(str, character)=>(str[character]==str[character].toUpperCase())
  
console.log(isUpperCase(str,6))

