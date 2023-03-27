// time: 11mins
// Detected time complexity: O(1)

function solution(X, Y, D) {
    // Implement your solution here
    // sorts array (ascending order, smallest - highest)

    // get distance
    let distanceToCover = Y-X
    let remainder = distanceToCover%D

    if (remainder>0) {
        return Math.floor(distanceToCover/D) + 1
    }
    else {
        return Math.floor(distanceToCover/D) 
    }

}

let X = 10
let Y = 85
let D = 30

console.log(solution(X, Y, D))