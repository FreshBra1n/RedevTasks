const checkBreckats = str => {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        const breckat = str[i]
        if (breckat === '(') {
            stack.push(breckat)
        } else {
            const lastEl = stack.pop();
            if (!lastEl) {
                return false
            }
        }
    }
    if (stack.length) return false;
    return true

}

console.log(checkBreckats('()()()('));
