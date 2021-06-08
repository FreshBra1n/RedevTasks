let arr = [1, 2, 3, 4, 5, 2, 21, 4, 4, 5, 6]

function withOutRepeat(array) {
    let clerArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        let count = 0;
        for (let j = 0; j < array.length; j++) {
            if (element === array[j]) {
                count++
            }
        }
        if (count === 1) {
            clerArray.push(element)
        }
    }
    return clerArray
}

console.log(withOutRepeat(arr))
