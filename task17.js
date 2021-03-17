let str = "redevCourses"
solution = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
console.log(solution(str))
