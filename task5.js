// task 5

bancomat = (num) => {
    return /^(\d{4}|\d{6})$/.test(num)
}
console.log(bancomat('4441f'))
