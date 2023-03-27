// OddOccurrencesInArray


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here

    // sorts array (ascending order, smallest - highest)
    A.sort(function(a, b){return a - b})

    // find pair
    if (A[0] != A[1]) {
        return A[0]
    }
    else if (A[A.length-2] != A[A.length-1]) {
        return A[A.length-1]
    }

    else {
        for (let i=2; i<=A.length-3; i+=2) {
            if (A[i] != A[i+1]) {
                return A[i]
            }
        }
    }
}

let A = [9, 3, 9, 3, 9, 7, 9]
let A1 = [3, 7, 7, 9, 9, 9, 9]
let A2 = [2, 2, 9, 9, 1, 1, 4]

console.log(solution(A2))