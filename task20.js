function factorial(n) {
  if (n) {
    return n * factorial(n - 1)
  } else {
    return 1
  }
  // return n ? n * factorial(n - 1) : 1;
}

console.log(factorial(5))
