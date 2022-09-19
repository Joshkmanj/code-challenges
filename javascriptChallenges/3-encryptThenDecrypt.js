console.log('encryptThenDecrypt Loaded in!');
// -------------------< Begin Challenge Below >---------------------


// Implement a pseudo-encryption algorithm which given a string S and an integer N 
//  concatenates all the odd-indexed characters of S with all the even-indexed characters of S,
//  this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n) {
  if (!text || !(Number.isSafeInteger(n)) || n <= 0) {
    console.warn(`Bad input, encryption stopped`);
    return text;
  }
  let encryptedText = text; // A variable is initiated to symbolize the separation of the values of the text and the encrypted text.

  while (n > 0) { // While loop is used to iterate the encryption logic for as many times as the n value states.
    let oddNum = '';
    let evenNum = '';

    for (let i = 0; i < encryptedText.length; i++) { // This loops through all values

      if (i % 2 == 0) { // This selects all the even numbered text 
        evenNum += encryptedText[i];

      } else { // This selects all the odd numbered text 
        oddNum += encryptedText[i];

      }
    }

    encryptedText = oddNum + evenNum; // The odd and even numbered text is concatenated
    n -= 1; // This increments the while condition to either the next iteration or to completion 
  }

  return encryptedText; // Once all iterations are complete, it returns the encrypted value
}




function decrypt(encryptedText, n) {

  if (!encryptedText || !(Number.isSafeInteger(n)) || n <= 0) {
    console.warn(`Bad input, decryption stopped`);
    return encryptedText;
  }

  let encryptedArray = encryptedText.split('');
  let remainderCount = encryptedArray.length % 2;
  let midpoint = ((encryptedArray.length - remainderCount) / 2);

  while (n > 0) { // While loop is used to iterate the encryption logic for as many times as the n value states.
    let oddNum = encryptedArray.slice(0, midpoint);
    let evenNum = encryptedArray.slice(midpoint);

    for (let i = 0; i < encryptedArray.length; i++) {
      if (i % 2 == 0) {
        encryptedArray[i] = evenNum.shift(); // The next value removed from the stack of even values replaces 
        // the current value of the encrypted array.
      } else {
        encryptedArray[i] = oddNum.shift(); // The next value removed from the stack of odd values replaces 
        // the current value of the encrypted array.
      }
    }
    n -= 1; // This increments the "while" condition to either the next iteration or to completion.
  }

  let decryptedText = encryptedArray.join(''); // This converts the array back into a string.

  return decryptedText; // Once all iterations are complete, it returns the encrypted value.
}






// console.log(decrypt("BDAC", 1));
// console.log(decrypt("BDACE", 1));
// console.log(decrypt("BDFACE", 1));
// console.log(decrypt("BDFACEG", 1));
// console.log(`Test: "${decrypt("135024", 1)}"="012345"`);




function encryptDecrypt(startingString, iterations) {
  console.log(`now encrypting: "${startingString}" (${iterations}) times!`);
  let encryptedString = encrypt(startingString, iterations)

  console.log(`now decrypting: "${encryptedString}" (${iterations}) times!`);
  let decryptedString = decrypt(encryptedString, iterations)

  return decryptedString;
}

//----------------------------------------< Tests >----------------------------------------
// console.log(`Test: "${encryptDecrypt("This is a test!", 0)}"="This is a test!"`);
// console.log(`Test: "${encryptDecrypt("", 2)}"=""`);
// console.log(`Test: "${encryptDecrypt("0123", 0)}"="0123"`);
// console.log(`Test: "${encryptDecrypt("0123", 1)}"="0123"`);
// console.log(`Test: "${encryptDecrypt("0123", 2)}"="0123"`);
// console.log(`Test: "${encryptDecrypt("0123", 3)}"="0123"`);
// console.log(`Test: "${encryptDecrypt("0123", 4)}"="0123"`);
// console.log(`Test: "${encryptDecrypt("0123", 5)}"="0123"`);
// console.log(`Test: "${encryptDecrypt("01234", 0)}"="01234"`);
// console.log(`Test: "${encryptDecrypt("01234", 1)}"="01234"`);
// console.log(`Test: "${encryptDecrypt("01234", 2)}"="01234"`);
// console.log(`Test: "${encryptDecrypt("01234", 3)}"="01234"`);
// console.log(`Test: "${encryptDecrypt("01234", 4)}"="01234"`);
// console.log(`Test: "${encryptDecrypt("01234", 5)}"="01234"`);
// console.log(`Test: "${encryptDecrypt("012345", 0)}"="012345"`);
// console.log(`Test: "${encryptDecrypt("012345", 1)}"="012345"`);
// console.log(`Test: "${encryptDecrypt("012345", 2)}"="012345"`);
// console.log(`Test: "${encryptDecrypt("012345", 3)}"="012345"`);
// console.log(`Test: "${encryptDecrypt("012345", 4)}"="012345"`);
// console.log(`Test: "${encryptDecrypt("012345", 5)}"="012345"`);
// console.log(`Test: "${encryptDecrypt("This is a test!", 1)}"="This is a test!"`);
// console.log(`Test: "${encryptDecrypt("This is a test!", 2)}"="This is a test!"`);
// console.log(`Test: "${encryptDecrypt("This is a test!", 3)}"="This is a test!"`);
// console.log(`Test: "${decrypt( null,0)}"=null`);
// console.log(`Test: "${decrypt( null,0)}"=null`);
console.log(`Test: "${encryptDecrypt('test', undefined)}"='test'`);
console.log(`Test: "${encryptDecrypt(undefined, 2)}"=undefined`);
console.log(`Test: "${encryptDecrypt(undefined)}"=undefined`);
console.log(`Test: "${encryptDecrypt()}"=undefined`);
console.log(`Test: "${encryptDecrypt(NaN, 2)}"=NaN`);
console.log(`Test: "${encryptDecrypt('test', NaN)}"='test'`);
console.log(`Test: "${encryptDecrypt('', 1)}"=''`);
console.log(`Test: "${encryptDecrypt('asdf', '2')}"='asdf'`);
console.log(`Test: "${encryptDecrypt('test', 'ten')}"='test'`);
console.log(`Test: "${encryptDecrypt('test', .5)}"='test'`);
console.log(`Test: "${encryptDecrypt('test', -1)}"='test'`);
console.log(`Test: "${encryptDecrypt('test', 0)}"='test'`);
console.log(`Test: "${encryptDecrypt(null, 2)}"=null`);
  // console.log(`Test: "${encryptDecrypt("This is a test!", 4)}"="This is a test!"`);
  // console.log(`Test: "${encryptDecrypt("This is a test!", -1)}"="This is a test!"`);
  // console.log(`Test: "${encryptDecrypt("This kata is very interesting!", 1)}"="This kata is very interesting!"`);