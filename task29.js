function unique_letters(str) {
str=str.split('')
let arr=[]
for (let i = 0; i < str.length; i++) {
  if(arr.indexOf(str[i])==-1) arr.push(str[i])    
}
   return arr=arr.join('')

} 

console.log (unique_letters('anaconda'))
