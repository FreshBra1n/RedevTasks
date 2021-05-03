let str = 'abc def ghi jkl mno pqr stu';

String.prototype.startsWith = function(start) {
    let str=this.split(' ')
return (str[0]==start)
};

console.log(str.startsWith('abc'))
