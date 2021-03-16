function stairs(n) {
    let res = [];
    for(let i = 1; i <= n; i++)
        res.unshift(i);
    return res;
}
console.log(stairs(5))
