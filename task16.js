let str= "This is an example!" 

function reverse(str){
    let newStr=str.split(' ').map(item=>item.split('').reverse().join('')).join(' ')
    return newStr
}

console.log(reverse(str))
