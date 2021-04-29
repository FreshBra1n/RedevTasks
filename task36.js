function colonOdd(num) {
    let numToStr = num.toString()
    let newNum = ''
    for (let i = 0; i < numToStr.length; i++) {
        if ((numToStr[i] % 2 !== 0) && (numToStr[i + 1] % 2 !== 0) && (numToStr[i + 1])) {
            newNum += numToStr[i] + ':'
        } else {
            newNum += numToStr[i]
        }
    }
    return newNum
}

console.log(colonOdd(55639217));
