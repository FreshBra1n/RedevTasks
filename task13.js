function stairs(n) {
    let res = [];
    for(let i = 1; i <= n; i++)
        res.push(i);
    return res.reverse();
}
console.log(stairs(5))
