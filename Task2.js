//task 2
function stopTrololo(str) {
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        if ('aeiou'.includes(str[i].toLowerCase())) continue
        newStr += str[i]
    }
    return newStr
}


console.log(stopTrololo("This website is for losers LOL!"))
