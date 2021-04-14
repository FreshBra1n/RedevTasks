let str = 'abc def def lom abc abc def';

function replaceAll(find, replace, str) {
 while(str.indexOf(find) > -1){
     str=str.replace(find,replace)
 }
 return str
};

console.log(replaceAll('abc', 'x', str))
