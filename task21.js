
function dreamTeam(array){
    return array.join(',').split('').filter(el=>el[0]>='A' && el[0]<='Z').sort().join('')
}
let team=['Matt', 'Ann', 'Dmitry', 'Max']

console.log(dreamTeam(team))
