const checkBreckats = str => {
    let stack = [];
    let obj = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    for (let i = 0; i < str.length; i++) {
        const breckat = str[i]
        if (breckat === '(' || breckat === '{' || breckat === '[') {
            stack.push(breckat)
        } else {
            const lastEl = stack.pop();
            if (breckat !==obj[lastEl]){
                return false
            }
        }
    }
    if (stack.length) return false;
    return true

}

console.log(checkBreckats('()()()'));
