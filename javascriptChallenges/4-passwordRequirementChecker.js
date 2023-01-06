console.log('passwordRequirementChecker Loaded in!');

// Must have AT LEAST:

//* One capital letter
//* One lowercase letter
//* One number
//* Eight characters




function passwordChecker(password) {
  let hasNumber = false;
  let hasLowerCase = false;
  let hasUpperCase = false;


  if (password.length !== 8) {
    console.log(`Password ${password} must be at least 8 characters`);
    return false;
  }


  for (let i = 0; i < password.length; i++) {

    let char = password[i];

    if (!isNaN(char)) {
      hasNumber = true;
      console.log('has number:', char);

    } else if (!(char.toUpperCase() === char && char.toLowerCase() === char)) {
      // This show

      if (char.toUpperCase() === char) {
        console.log('has upper case:', char);
        hasUpperCase = true;

      } else if (char.toLowerCase() === char) {
        console.log('has lower case:', char);
        hasLowerCase = true;
      }
    }

  }


  if (hasNumber && hasLowerCase && hasUpperCase) {
    console.log(`Password ${password} is great :)`);
    return true;
  } else {
    console.log('Password does not meet requirements');
    return false;
  }

}

// console.log(passwordChecker('12345678'));
// console.log(passwordChecker('12345678'));
console.log(passwordChecker('12#$%^78'));
// console.log(passwordChecker('12asdf78'));
// console.log(passwordChecker('adfghjk'));
// console.log(passwordChecker('12asDF78'));

function checkSymbols(input) {

  let low = input.toLowerCase()
  console.log(low);
  let upp = input.toUpperCase()
  console.log(upp);

}

// checkSymbols('!');
// checkSymbols('%');
// checkSymbols('*');