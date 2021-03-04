//Task 1

function findNextSquare(sq) {
    let firstSqr = Math.sqrt(sq) + 1;
    let nextSqr = Math.sqrt(sq) + 1;
    nextSqr *= nextSqr
    firstSqr *= firstSqr
    if (nextSqr == firstSqr) {
        return nextSqr
    } else {
        return -1
    }
}
console.log(findNextSquare(169))