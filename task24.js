let str = 'tasks JavaScript'
function isUpperCase(str, character) {
    let arr = str.split();
    if (str[character].replace(/\A-Z/)==str[character].toUpperCase()) {
        return true
    } else {
        return false
    }
}
console.log(isUpperCase(str,6))
