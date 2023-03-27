// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // Implement your solution here
    let binaryGap = 0
    let counter = 0
    let binaryGaps = []
    let tmp = 0

    let quotient = Math.floor(N/2)
    let remainder = N%2

    while (quotient !== 0) {
        N = quotient
        if (remainder==1) {
            if (counter==0)
                counter += 1
            if (binaryGap>=1) {
                counter += 1
                if (counter == 2) {
                    binaryGaps.push(binaryGap)
                    counter = 1
                    binaryGap = 0
                }
            }
        }
        else if (counter==1){
            binaryGap+=1
        }
        quotient = Math.floor(N/2)
        remainder = N%2
    }
    counter += 1
    if (counter==2) {
        binaryGaps.push(binaryGap)
    }
    

    // return highest binary gap if any exist
    if (binaryGaps.length>0) {
        binaryGap=binaryGaps[0]
        for (let i=0; i<binaryGaps.length; i++) {
            if (binaryGap<binaryGaps[i])
                binaryGap = binaryGaps[i]

        }
    }
    return binaryGap
}

console.log(solution(1041), 't')