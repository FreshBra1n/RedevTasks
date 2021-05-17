let arr = ["кот", "кто", "ток"]
function anagrams(arr) {
    if (!arr || arr.length <= 1) return false
    let word = arr[0].split('').sort().join('')
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].split('').sort().join('') !== word) {
            return false
        }

    }
    return true
}


console.log(anagrams(arr))
