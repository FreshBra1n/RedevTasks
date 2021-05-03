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

function colonOdd1(num) {
    return [...num.toString()].reduce((acc, cur, i, arr) => {
        return (cur % 2) && (arr[i + 1] % 2)
            ? acc.push(cur, ':')
            : acc.push(cur)
            , acc;
    }
        , [])
        .join('')
}


console.log(colonOdd1(55639217));
