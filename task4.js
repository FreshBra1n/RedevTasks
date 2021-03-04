//task 4

acuum = (str) => str
    .split('')
    .map((w, i) => (w = w.toLowerCase().repeat(i + 1)) && w[0].toUpperCase() + w.slice(1))
    .join('-')

console.log(acuum('qwerty'))
