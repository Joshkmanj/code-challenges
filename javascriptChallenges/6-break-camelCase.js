console.log('break camelCase Loaded in!');
// -------------------< Begin Challenge Below >---------------------

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

let testOne = 'camelCasing'
let testTwo = 'ACoupleWordsIn HereOK'
let testThree = 'CamelCasing'

// ----------------------< Loop based solution >-----------------------
// function solution(string) {
//   let newString = '';

//   for (let i=0 ; i < string.length; i++) {
//     if ( string[i].toUpperCase() === string[i] && i > 0 && string[(i-1)] != ' ' && string[i] != ' '){
//       console.log('string[i-1]=', string[i-1]);
//       newString += ' '
//     }
//     newString += string[i];
//   }
//   return newString;
// }
// ----------------------< End Loop based solution >-----------------------

// ----------------------< Replacement based solution >-----------------------
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}
// ----------------------< End Replacement based solution >-----------------------


// -----------------------< Tests >-------------------------
console.log(solution(testOne));
console.log(solution(testTwo));
console.log(solution(testThree));