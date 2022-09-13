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

  // A variable is initiated to symbolize the separation of the values of the text and the encrypted text.
  let encryptedText = text;
  
  // While loop is used to iterate the encryption logic for as many times as the n value states.
  while (n > 0) {
  let oddNum = '';
  let evenNum = '';
  
  // This loop selects all the odd numbered text 
  for (let i=1; i<=encryptedText.length - 1; i+=2){
    oddNum += encryptedText[i];
  }
  // This loop selects all the even numbered text 
  for (let i=0; i<=encryptedText.length - 1; i+=2){
    evenNum += encryptedText[i];
  }
  
  // The odd and even numbered text is concatenated
  encryptedText = oddNum + evenNum
  
  // This increments the while condition to either the next iteration or to completion 
  n-=1;
  }
  
  // Once all iterations are complete, it returns the encrypted value
  return encryptedText;
  }
  
  function decrypt(encryptedText, n) {
    let decryptedText = encryptedText;
  
    // While loop is used to iterate the encryption logic for as many times as the n value states.
   while (n > 0) {
    let oddNum = '';
    let evenNum = '';
  
    // This loop selects all the odd numbered text 
    for (let i=1; i<=decryptedText.length - 1; i+=2){
      oddNum += decryptedText[i];
    }
    // This loop selects all the even numbered text 
    for (let i=0; i<=decryptedText.length - 1; i+=2){
      evenNum += decryptedText[i];
    }
  
    // The odd and even numbered text is concatenated
    encryptedText = oddNum + evenNum
    
    // This increments the while condition to either the next iteration or to completion 
    n-=1;
    }
  
    // Once all iterations are complete, it returns the encrypted value
    return encryptedText;
  }
  
  console.log('begin encryption');
  
  // console.log(`Test: "${encrypt("This is a test!", 0)}"="This is a test!"`);
  // console.log(`Test: "${encrypt("", 2)}"=""`);
  console.log(`Test: "${encrypt("0123", 0)}"="0123"`);
  console.log(`Test: "${encrypt("0123", 1)}"="1302"`);
  console.log(`Test: "${encrypt("0123", 2)}"="3210"`);
  console.log(`Test: "${encrypt("0123", 3)}"="2031"`);
  console.log(`Test: "${encrypt("0123", 4)}"="2031"`);
  console.log(`Test: "${encrypt("0123", 5)}"="1302"`);
  console.log(`Test: "${encrypt("01234", 0)}"="01234"`);
  console.log(`Test: "${encrypt("01234", 1)}"="13024"`);
  console.log(`Test: "${encrypt("01234", 2)}"="32104"`);
  console.log(`Test: "${encrypt("01234", 3)}"="20314"`);
  console.log(`Test: "${encrypt("01234", 4)}"="01234"`);
  console.log(`Test: "${encrypt("01234", 5)}"="13024"`);
  console.log(`Test: "${encrypt("012345", 0)}"="012345"`);
  console.log(`Test: "${encrypt("012345", 1)}"="135024"`);
  console.log(`Test: "${encrypt("012345", 2)}"="304152"`);
  console.log(`Test: "${encrypt("012345", 3)}"="012345"`);
  console.log(`Test: "${encrypt("012345", 4)}"="135024"`);
  console.log(`Test: "${encrypt("012345", 5)}"="304152"`);
  // console.log(`Test: "${encrypt("This is a test!", 1)}"="hsi  etTi sats!"`);
  // console.log(`Test: "${encrypt("This is a test!", 2)}"="s eT ashi tist!"`);
  // console.log(`Test: "${encrypt("This is a test!", 3)}"=" Tah itse sits!"`);
  // console.log(`Test: "${encrypt("This is a test!", 4)}"="This is a test!"`);
  // console.log(`Test: "${encrypt("This is a test!", -1)}"="This is a test!"`);
  // console.log(`Test: "${encrypt("This kata is very interesting!", 1)}"="hskt svr neetn!Ti aai eyitrsig"`);
  
  
  // console.log('begin decryption');