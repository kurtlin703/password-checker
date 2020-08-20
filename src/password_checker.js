"use strict";

function passwordIsValid(password) {
  let upperCase = new RegExp(/[A-Z]/);
  let lowerCase = new RegExp(/[a-z]/);
  let digits = new RegExp(/[0-9]/);
  let specialCharacters = new RegExp(/[!@#$%^&*!]/);
  let passwordLength = new RegExp(/[A-Za-z0-9]{8,}/);

  if (password == "") 
    throw  Error("password should exist");
  if (upperCase.test(password) == true)
    throw new Error("password should have one upper case letter");
  if (lowerCase.test(password) == false)
    throw new Error("password should have one lower case letter");
  if (digits.test(password) == false)
    throw new Error("password should have one digit");
  if (passwordLength.test(password) == false)
    throw new Error("password length should be 8 or more characters");
  if (specialCharacters.test(password) == false)
    throw new Error("password should have one special character");
  return true;
}

function passwordIsOkay(passwordTwo) {
  let lowerCase = /^[a-z]/g;
  let upperCase = /^[A-Z]/g;
  let digits = /^[\d]/g;
  let specialCharacters = /^[~!@#$%^&*()_+]/g;

  if (passwordTwo.length < 9 || passwordTwo === null) {
    return passwordIsOkay;
  } else {
    if (
      lowerCase.test(passwordTwo) ||
      upperCase.test(passwordTwo) ||
      digits.test(passwordTwo) ||
      specialCharacters.test(passwordTwo)
    ) {
      return true;
    }
  }
}

module.exports = {
  passwordIsValid,
  passwordIsOkay
};
