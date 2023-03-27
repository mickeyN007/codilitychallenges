// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // Implement your solution here
    // create new array
    let shiftedArray = []
    let position

    // loop through array
    for (let i=0; i<A.length; i++) {
        // get new position of element
        position = (i+K)%A.length
        shiftedArray[position] = A[i]
    }

    // return new array
    return shiftedArray
}



let A = [1, 2, 3, 4]
let K = 4

let A1 = [3, 8, 9, 7, 6]
let K1 = 3

console.log(solution(A, K))
console.log(solution(A1, K1))
