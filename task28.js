let str = "вишня, груша, слива, груша"

const removeDuplicate=str=>{
    str=str.split(',')
    return str.filter((item,indx)=> str.indexOf(item)===indx).join(',')
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
