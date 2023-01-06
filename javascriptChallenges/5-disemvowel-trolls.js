console.log('disemvowelTrolls Loaded in!');
// -------------------< Begin Challenge Below >---------------------

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.



let testComment = 'This website is for losers LOL!';



function disemvowel(meanComment) {

  let vowelArray = ['a','e','u','i','o'];
  let niceComment = '';


  for (let i = 0; i < meanComment.length; i++ ){
 
    if( vowelArray.indexOf(meanComment[i].toLowerCase()) < 0 ){
      niceComment += meanComment[i];
    }

  }


  return niceComment;
} 


console.log(disemvowel(testComment));