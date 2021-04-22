let str = "вишня, груша, слива, груша"

const removeDuplicate=str=>{
     let str1=str.split(',')
    return str1.filter((item,indx)=> str1.indexOf(item)===indx).join(',')
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
