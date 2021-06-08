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


let arr = [1, 2, 3, 4, 5, 2, 21, 4, 4, 5, 6]

function withOutRepeat2(array) {
    let clerArray = [];
    let obj = {};

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (!(element in obj)) {
            obj[element] = 1
        } else {
            obj[element] += 1
        }
    }
    const keys = Object.keys(obj)
    keys.forEach((el) => {
        if (obj[el] === 1){
            clerArray.push(el)
        }
    })
return clerArray
}

console.log(withOutRepeat2(arr))
