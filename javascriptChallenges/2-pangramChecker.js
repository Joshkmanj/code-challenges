console.log('pangramChecker Loaded in!');
// -------------------< Begin Challenge Below >---------------------



// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
// because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


// "The quick brown fox jumps over the lazy dog"

function isPangram(string) {

  // Initialize the Alphabet to compare against
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let lowerCaseString = string.toLowerCase()

  // Loop through the entire alphabet
  for (const letter of alphabet) {

    // Search to see if that letter is present
    if (lowerCaseString.indexOf(letter) < 0) {

      // If the letter is missing, return false
      console.log(`${lowerCaseString} is NOT a panagram!!`);
      return false;
    }
  }

  // If the entire alphabet is run through and all letters are present, return true
  console.log(`${lowerCaseString} IS a panagram!!`);
  return true;
}

isPangram('blagkjdsfjkfs?')
isPangram('pi9ufdksh huewqry3iubqwertyuioppl,mnbvcxzawqwerty')
isPangram('bvcxzawqwerty')
isPangram('Cwm fjord bank glyphs vext quiz')
isPangram('pi9ufdksh huewqry3iubqwertyuioppl,mnbvcxza')