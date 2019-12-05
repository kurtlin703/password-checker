"use strict"

// let counter = 0;

function passwordIsCorrect(password){

  var myRegex = new RegExp( /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+~]).{8,}/ );
 


 if(password.match(myRegex)){
 	  return true
     }
     else {
 	  return false
 	  
 	}
}
// console.log(passwordIsCorrect("Kurtlin1@"))




// new task
function passwordIsOkay(passwordTwo){

    var lowerCase  		= /^[a-z]/g
    var upperCase 		= /^[A-Z]/g
    var digits 			= /^[\d]/g
    var specialCharacters = /^[~!@#$%^&*()_+]/g
  
    
  
   
  if((passwordTwo.length > 8) && (passwordTwo == "")) {
       
  return false;
  
  }
  else{
    if( (lowerCase.test(passwordTwo))|| (upperCase.test(passwordTwo)) || (digits.test(passwordTwo) )||(specialCharacters.test(passwordTwo))) {
        return true;
  }
}
}



 module.exports = {
     passwordIsCorrect, passwordIsOkay
 }
 