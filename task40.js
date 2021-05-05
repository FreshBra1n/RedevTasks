let array = [7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 7];

function func(arr) {
    let stor = {}
    arr.forEach((e) => {
        stor[e] = stor[e] > 0 ? stor[e] + 1 : 1;
    })
    let ent = Object.entries(stor).sort((a, b) => b[1] - a[1])
    return `${ent[0][0]} повторяеться ${ent[0][1]} раз`
}

console.log(func(array))
