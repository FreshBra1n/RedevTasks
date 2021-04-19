// let str = 'abc def def lom abc abc def';

// function replaceAll(find, replace, str) {
//  while(str.indexOf(find) > -1){
//      str=str.replace(find,replace)
//  }
//  return str
// };

// console.log(replaceAll('abc', 'x', str))

let str = 'abc def def lom abc abc def';

function replaceAll(search, replace, str) {
    return str.split(search).join(replace);
}
console.log(replaceAll('abc', 'x', str))
