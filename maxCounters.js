// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    // Implement your solution here
    let counters = Array(N).fill(0) // fill array with 0
    let max = 0

    for (let i=0; i<A.length; i++) {
        if (1<=A[i] &&  A[i]<=N) {
            // do operation
            counters[A[i]-1] += 1
            // update max if necessary
            if (counters[A[i]-1]>max) {
                max = counters[A[i]-1]
            }
        }
        else if (A[i] == N+1) {
            counters.fill(max)
        }
    }
    return counters
}

let A = [3,4,4,6,1,4,4]
let N = 5

//let A = 

console.log(solution(N, A))