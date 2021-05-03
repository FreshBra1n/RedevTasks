let str = "Каждый охотник желает знать"; 
let str1 = "скрипт";
let str2 = "знать";

String.prototype.endsWith = function(substring) {
    let str=this.split(' ')
    let index=this.split(' ').length-1
    return (str[index]==substring)
};
console.log(str.endsWith(str2))
