console.log('passwordRequirementChecker Loaded in!');

// Must have AT LEAST:

//* One capital letter
//* One lowercase letter
//* One number
//* Eight characters

function passwordChecker(password) {
  let hasNumber = false;
  let hasLowercase = false;
  let hasUppercase = false;


  
  if(password.length !== 8){
    console.log(`Password ${password} must be at least 8 characters`);
    return false;
  }

  for (let i = 0; i < password.length; i++) {

    let char = password[i]
    
    if ( !isNaN(char)){
      hasNumber = true;
      console.log('has number:', password[i]);
    }
    else if(char.toUppercase() === char) {
      console.log('has uppercase:');
    } else if(char.toLowercase() === char){
      
    }

  }


  if (hasNumber && hasLowercase && hasUppercase) { 
    console.log(`Password ${password} is great :)`);
    return true;
  }

}

console.log(passwordChecker('1234567'));
console.log(passwordChecker('12asdf78'));

