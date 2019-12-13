"use strict"



function passwordIsValid(password){

  var myRegex = new RegExp( /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+~]).{8,}/ );
 


 if(password.match(myRegex)){
 	  return true
     }
     else {
 	  return false
 	  
 	}
}






function passwordIsOkay(passwordTwo){

    var lowerCase  		= /^[a-z]/g
    var upperCase 		= /^[A-Z]/g
    var digits 			= /^[\d]/g
    var specialCharacters = /^[~!@#$%^&*()_+]/g
  
    
  
   
  if((passwordTwo.length < 9) || (passwordTwo === null)) {
       
  return passwordIsOkay;
  
  }
  else{
    if( (lowerCase.test(passwordTwo))|| (upperCase.test(passwordTwo)) || (digits.test(passwordTwo) )||(specialCharacters.test(passwordTwo))) {
        return true;
  }

}
}



 module.exports = {
     passwordIsValid, passwordIsOkay
 }
 