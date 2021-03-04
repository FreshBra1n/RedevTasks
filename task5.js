// task 5


bancomat = (num) => {
    let newNum=num.toString()
    let str=newNum.split('')
    if (num == NaN ||str.length==4 || str.length==6) {
        return true
    } else {
        return false
    }
}
console.log(bancomat(44414))
