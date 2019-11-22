"use strict"

let counter = 0;

function passwordIsCorrect(password){

  var myRegex = new RegExp( /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+~]).{8,}/ );
 


 if(password.match(myRegex)){
 	  return true
     }
     else {
 	  return false
 	  
 	}
}




// new task
function passwordIsOkay(password){

  var lowerCase  		= /^[a-z]/g
  var upperCase 		= /^[A-Z]/g
  var digits 			= /^[\d]/g
  var specialCharacters = /^[~!@#$%^&*()_+]/g

  

 
if((password.length < 8) && (password == "")) {
     
return false;

}
else{
	if( (lowerCase.test(password))|| (upperCase.test(password)) || (digits.test(password) )||(specialCharacters.test(password))) {
   	return true;
}
}

}



describe("passwordIsCorrect", () =>{
	it("checks if the password meets all  requirements", () =>{ 



	

	//arrange
	expect(passwordIsCorrect("Pas$word1")).toBe(true);	//arrange
	
})
})	

describe("passwordIsOkay", () =>{
	it("checks if the password meets atleast three  requirements", () =>{ 




	

	//arrange
	expect(passwordIsOkay("password")).toBe(true)
	
})
})