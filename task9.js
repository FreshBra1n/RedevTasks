//task 9


function simple (str){
    let newStr=str.split(',').map(item=>item.length)
    return (`MinWord: ${Math.min(...newStr)}`) || 0
    
}

let str='Sassha,Peetyaa,Masha'
console.log(simple(str))
