String.prototype.toJadenCase=function (){
    this.split(' ')
    return   str.map(n=>`${n[0].toUpperCase()}${n.slice(1)}`).join(' ')
}

console.log('народ прив'.toJadenCase())
