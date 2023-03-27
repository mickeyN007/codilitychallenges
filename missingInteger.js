function solution(A) {
    // Implement your solution here
    // sorts array (ascending order, smallest - highest)
    A.sort(function(a, b){return a - b})
    let smallest = 1
    for (let i=0; i<A.length; i++) {
        if (A[i] > 0 && smallest==A[i]) {
            smallest += 1
        }
        else if (smallest < A[i]) {
            return smallest
        }
    }

    return smallest 
}

let a = [1, 3, 6, 4, 1, 2, 5]
let b = [1, 2, 3]
let c = [-1, -3]

console.log(solution(c))