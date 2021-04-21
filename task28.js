let str = "вишня, груша, слива, груша"

function removeDuplicate(str) {
    str=str.split(',')
    const uSet =new Set(str)
    const toArr=[...uSet]
   return toArr.join(',')

}

console.log(removeDuplicate(str))


// function removeDuplicate(str) {
//  str=str.split(',')
//  let arr=[]
//  for (let i = 0; i < str.length; i++) {
//    if(arr.indexOf(str[i])==-1) arr.push(str[i])    
//  }
//     return arr=arr.join(',')
// }

// console.log(removeDuplicate(str))
