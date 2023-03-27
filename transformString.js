// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // initializations
    let  stack = [];
    let currentChar = S[0];
    let previousChar = '';
  
  
    for (let i = 0; i < S.length; i++) {
      currentChar = S[i];
  
      if (stack.length === 0) {
        stack.push(currentChar);
      }
      else {
        previousChar = stack[stack.length - 1];
  
        if (
          (currentChar === "A" && previousChar === "B") ||
          (currentChar === "B" && previousChar === "A") ||
          (currentChar === "C" && previousChar === "D") ||
          (currentChar === "D" && previousChar === "C")
        ) {
          stack.pop();
        } else {
          stack.push(currentChar);
        }
      }
    }
  
    return stack.join("");
  }