let str = "Пример строки";

const capitalizeFirstLetter = str => {
    let newStr = str.split('')
    let fL = newStr[0].toLowerCase()
    newStr.splice(0, 1, fL) 
    return newStr.join('')
}

console.log(capitalizeFirstLetter(str))
