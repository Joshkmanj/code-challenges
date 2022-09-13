console.log('threeFiveSolver Loaded in!');
// -------------------< Begin Challenge Below >---------------------


// function solution(number){
//   let sum = 0;

//   if(number<0){
//     console.log('number was less than zero');
//     return 0;
//   }  

//   console.log('Starting "Five" loop');
//   for(let i=0; i<number; i+=5){
//     sum += i;
//     console.log(`Five: number=${number}, i=${i}, sum is now ${sum}`);
//   }

//   console.log('Starting "Three" loop');
//   for(let i=0; i<number; i+=3){
//     if(i % 5 !=0){
//       sum += i;
//       console.log(`Three: number=${number}, i=${i}, sum is now ${sum}`);
//     } else{
//       console.log(`${i} is divisible by 5, will not add`);
//     }
//   }
//   console.log('--------- Summation Complete!! -----------');
//   return sum;
// }

function solution(number) {

  // Initialize the sum variable
  let sum = 0;

  // Filter out negative numbers
  if (number < 0) {
    // Warn the user that the number is negative
    console.log(`The number (${number}) you chose is negative!`);
  }

  // This else clause isn't necessary, but it makes the logic below more readable and organized
  else {
    // Loop through the values up to the number
    for (let i = 0; i < number; i++) {
      // Check if this number is divisible by 3 or 5
      if ((i % 3 == 0) || (i % 5 == 0)) {
        // Add this multiple to the sum
        sum += i;
      }
    }
  }

  // Lastly, we return the sum
  return sum;
}


console.log('Testing begin');
console.log(`Testing -10, Correct answer = 0, sum = ${solution(-10)}`);
console.log(`Testing 0, Correct answer = 0, sum = ${solution(0)}`);
console.log(`Testing 5, Correct answer = 3, sum = ${solution(5)}`);
console.log(`Testing 6, Correct answer = 8, sum = ${solution(6)}`);
console.log(`Testing 7, Correct answer = 14, sum = ${solution(7)}`);
console.log(`Testing 8, Correct answer = 14, sum = ${solution(8)}`);
console.log(`Testing 9, Correct answer = 14, sum = ${solution(9)}`);
console.log(`Testing 10, Correct answer = 23, sum = ${solution(10)}`);
console.log(`Testing 11, Correct answer = 33, sum = ${solution(11)}`);
console.log(`Testing 12, Correct answer = 33, sum = ${solution(12)}`);
console.log(`Testing 13, Correct answer = 45, sum = ${solution(13)}`);
console.log(`Testing 14, Correct answer = 45, sum = ${solution(14)}`);
console.log(`Testing 15, Correct answer = 45, sum = ${solution(15)}`);
console.log(`Testing 16, Correct answer = 60, sum = ${solution(16)}`);
