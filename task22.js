function transform(arr) {
    let din = '--discard-next'
    let dip = '--discard-prev'
    let dn = '--double-next'
    let dp = '--double-prev'

    if (arr.includes(dn)) {
        let indDn = arr.indexOf(dn)
        arr.push(arr[indDn + 1])
        return arr
    } else if (arr.includes(dp)) {
        let indDp = arr.indexOf(dp)
        arr.splice(indDp,0,indDp+1)
        return arr
    }else if (arr.includes(din)){
        let indDin = arr.indexOf(din)
        arr.splice(indDin+1,1)
        return arr
    }else if (arr.includes(dip)){
        let indDip=arr.indexOf(dip)
        arr.splice(indDip-1,1)
        return arr
    }

}
let arr = [1,2, 3, '--discard-prev', 4]
console.log(transform(arr))
