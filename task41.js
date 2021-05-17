function f(a) {

    let currentSum = a;
  
    function sum(b) {
      currentSum += b;
      return sum;
    }
  
    sum.toString = function() {
      return currentSum;
    };
  
    return sum;
  }

console.log(String(f(1)(12)(2)))

