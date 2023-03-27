// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(U, L, C) {
    // initializations
    const N = C.length;
    let upperRow = new Array(N).fill(0);
    let lowerRow = new Array(N).fill(0);
  
    for (let i = 0; i < N; i++) {
      if (C[i] === 2) {
        if (U > 0 && L > 0) {
          upperRow[i] = 1;
          lowerRow[i] = 1;
          U--;
          L--;
        } 
        else {
          return "IMPOSSIBLE";
        }
      } else if (C[i] === 1) {
          if (U > L) {
            upperRow[i] = 1;
            U--;
          } else {
              lowerRow[i] = 1;
              L--;
          }
      }
    }
  
    if (U !== 0 || L !== 0) {
      return "IMPOSSIBLE";
    }
  
    return upperRow.join("") + "," + lowerRow.join("");
  }